import * as React from 'react';
import { Room } from './room';
import { ChatMessage } from './view-model';
const uuidv4 = require('uuid/v4');

interface Props {
  userName: string;
}

interface State {
  message: string;
  conversation: ChatMessage[];
}

export class RoomContainer extends React.Component<Props, State> {
  state = {
    conversation: [],
    message: '',
  };

  onChangeMessage = (newMessage: string) => {
    this.setState({
      message: newMessage,
    });
  }

  onSubmitMessage = () => {
    if (this.state.message !== '') {
      this.setState({
        conversation: [
          ...this.state.conversation,
          {
            id: uuidv4(),
            text: this.state.message,
            user: this.props.userName,
          },
        ],
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
