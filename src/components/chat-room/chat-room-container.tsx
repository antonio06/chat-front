import * as React from 'react';
import { socketService } from '../../api/socket';
import { userApi } from '../../api/user/userApi';
import { ChatRoom } from './chat-room';
import { getErrorMessageFromApiError } from './errorServices';
import { User } from '../../api/models';

interface State {
  showModal: boolean;
  userName: string;
  onlineUsers: User[];
  currentUser: User | null;
  errorMessage: string;
}

export class ChatRoomContainer extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      userName: '',
      onlineUsers: [],
      currentUser: null,
      errorMessage: '',
    };
  }

  componentWillUnmount() {
    const socket = socketService.getSocket();

    if (socket) {
      socket.off(socketService.events.loggedUser);
    }
  }

  onChangeUserName = (newUserName: string) => {
    this.setState({
      userName: newUserName,
      errorMessage: this.getUserNameError(newUserName),
    });
  }

  getUserNameError = (newUserName: string): string => {
    return newUserName === '' ? 'The username is required' : '';
  }

  onSubmitUserName = () => {
    this.setState({
      errorMessage: '',
    });

    this.addUser();
  }

  addUser = () => {
    userApi.addUser(this.state.userName).then((currentUser) => {
      if (typeof currentUser !== 'string') {
        this.setState({
          currentUser,
          showModal: !this.state.showModal,
        });

        socketService.establishConnection(currentUser.id);
        const socket = socketService.getSocket();
        if (socket) {
          socket.on(socketService.events.loggedUser, (user: User) => {
            this.setState({
              onlineUsers: [...this.state.onlineUsers, user],
            });
          });
        }
      } else {
        this.setState({
          errorMessage: getErrorMessageFromApiError(currentUser),
        });
      }
    });
  }

  render() {
    return (
      <ChatRoom
        showModal={this.state.showModal}
        onChangeUserName={this.onChangeUserName}
        userName={this.state.userName}
        onSubmitUserName={this.onSubmitUserName}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}
