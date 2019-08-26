import * as React from 'react';
import { Message as ApiMessage, User } from '../../../../api/models';
import { events } from '../../../../api/socket-events';
import { SocketContext } from '../../../../socket';
import { mapMessageToVm } from './mappers';
import { Room } from './room';
import { Message } from './view-model';

interface Props {
  user: User | null;
  onlineUsers: User[];
}

interface State {
  message: string;
  conversation: Message[];
}

export class RoomContainer extends React.PureComponent<Props, State> {
  static contextType = SocketContext;
  context!: React.ContextType<typeof SocketContext>;
  isSubscribed = false;

  constructor(props) {
    super(props);
    this.state = {
      conversation: [],
      message: '',
    };
  }

  componentWillUnmount() {
    const { socket } = this.context;

    if (socket && this.isSubscribed) {
      socket.off(events.onNewMessage);
    }
  }

  componentDidUpdate() {
    const { socket } = this.context;
    if (socket && !this.isSubscribed) {
      socket.on(events.onNewMessage, this.onNewMessage);
      this.isSubscribed = true;
    }
  }

  onNewMessage = (message: ApiMessage) => {
    const user = this.props.onlineUsers.find(({ id }) => id === message.userId) || null;
    this.setState({
      conversation: [...this.state.conversation, mapMessageToVm(message, user)],
    });
  }

  onChangeMessage = (message: string) => {
    this.setState({ message });
  }

  isValidMessage(message: string) {
    return message.trim() !== '';
  }

  onSubmitMessage = () => {
    const { socket } = this.context;
    if (this.isValidMessage(this.state.message) && socket && this.props.user) {

      socket.emit(events.sendMessage, {
        userId: this.props.user.id,
        text: this.state.message,
      });
      this.setState({
        message: '',
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
