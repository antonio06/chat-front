import * as React from 'react';
import { Room } from './room';
import { Conversation, DefaultConversation } from './viewModel';

interface State {
  message: string;
  conversation: Conversation;
}

export class RoomComponent extends React.Component<{}, State> {
  state = {
    conversation: DefaultConversation(),
    message: '',
  };

  onChangeMessage = (newMessage: string) => {
    this.setState({
      message: newMessage,
    });
  }

  onSubmit = () => {
    this.setState({
      conversation: {
        user: 'Mark',
        message: this.state.message,
      },
      message: '',
    });
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
