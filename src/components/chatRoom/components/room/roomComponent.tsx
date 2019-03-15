import * as React from 'react';
import { Room } from './room';
import { Conversation } from './viewModel';
const uuidv4 = require('uuid/v4');

interface State {
  message: string;
  conversations: Conversation[];
}

export class RoomComponent extends React.Component<{}, State> {
  state = {
    conversations: [],
    message: '',
  };

  onChangeMessage = (newMessage: string) => {
    this.setState({
      message: newMessage,
    });
  }

  onSubmit = () => {
    this.setState({
      conversations: [
        ...this.state.conversations,
        {
          id: uuidv4(),
          message: this.state.message,
          user: 'Mark',
        }
      ],
      message: '',
    });
  }

  render() {
    return (
      <Room
        message={this.state.message}
        conversations={this.state.conversations}
        onChangeMessage={this.onChangeMessage}
        onSubmit={this.onSubmit}
      />
    );
  }
}
