import * as React from 'react';
import { ChatRoom } from './chat-room';
import { userApi } from '../../api/user/userApi';
import { socketService } from '../../api/socket';

interface State {
  isUserNameValid: boolean;
  showModal: boolean;
  userName: string;
  onlineUsers: User[];
  currentUser: User | null;
}

export class ChatRoomContainer extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      userName: '',
      isUserNameValid: false,
      onlineUsers: [],
      currentUser: null,
    };
  }

  onChangeUserName = (newUserName: string) => {
    this.setState({
      userName: newUserName,
      isUserNameValid: this.isUserNameValid(newUserName),
    });
  }

  isUserNameValid = (newUserName: string) => (
    newUserName !== ''
  )

  onSubmitUserName = () => {
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
        // TODO: Implement errors
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
        isUserNameValid={this.state.isUserNameValid}
      />
    );
  }
}
