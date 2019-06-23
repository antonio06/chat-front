import * as React from 'react';
import { Room } from './room';
import { Conversation } from './view-model';
const uuidv4 = require('uuid/v4');

interface Props {
  userName: string;
}

interface State {
  message: string;
  conversation: Conversation[];
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

  onSubmit = () => {
    if (this.state.message !== '') {
      this.setState({
        conversation: [
          ...this.state.conversation,
          {
            id: uuidv4(),
            message: this.state.message,
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
        onSubmit={this.onSubmit}
      />
    );
  }
}
