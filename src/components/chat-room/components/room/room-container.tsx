import * as React from 'react';
import { Room } from './room';
import { User, Message as ApiMessage, ApiError } from '../../../../api/models';
import { Message } from './view-model';
import { socketService } from '../../../../api/socket';
import { getErrorMessageFromApiError } from '../../error-service';
import { mapMessageToVm } from './mappers';

interface Props {
  user: User | null;
  onlineUsers: User[];
}

interface State {
  message: string;
  conversation: Message[];
  errorMessage: string;
}

export class RoomContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      conversation: [],
      message: '',
      errorMessage: '',
    };
  }

  componentWillUnmount() {
    const socket = socketService.getSocket();

    if (socket) {
      socket.off(socketService.events.successAddMessage);
      socket.off(socketService.events.errorAddMessage);
    }
  }

  componentDidUpdate({ user }: Props) {
    // TODO: Refactor socket service to use react context
    setTimeout(() => {
      const socket = socketService.getSocket();
      if (user === null && this.props.user && socket) {
        socket.on(socketService.events.successAddMessage, this.onSuccessMessage);
        socket.on(socketService.events.errorAddMessage, this.onErrorMessage);
      }
    }, 100);
  }

  onSuccessMessage = (message: ApiMessage) => {
    const user = this.props.onlineUsers.find(({ id }) => id === message.userId) || null;

    this.setState({
      conversation: [...this.state.conversation, mapMessageToVm(message, user)],
    });
  }

  onErrorMessage = ({ error: { message } }: ApiError) => {
    const errorMessage = getErrorMessageFromApiError(message);
    this.setState({ errorMessage });
  }

  onChangeMessage = (message: string) => {
    this.setState({ message });
  }

  isValidMessage(message: string) {
    return message !== '';
  }

  onSubmitMessage = () => {
    const socket = socketService.getSocket();
    if (this.isValidMessage(this.state.message) && socket && this.props.user) {

      socket.emit(socketService.events.addMessage, {
        userId: this.props.user.id,
        text: this.state.message,
      });
    }
  }

  render() {
    return (
      <Room
        message={this.state.message}
        conversation={this.state.conversation}
        onChangeMessage={this.onChangeMessage}
        onSubmitMessage={this.onSubmitMessage}
      />
    );
  }
}
