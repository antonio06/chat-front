import * as React from 'react';
import { Room } from './room';
import { Conversation, defaultConversationValues } from './viewModel';
import * as styles from './room.styles';
const uuidv4 = require('uuid/v4');

interface State {
  message: string;
  conversations: Conversation[];
}

export class RoomComponent extends React.Component<{}, State> {
  state = {
    conversations: defaultConversationValues(),
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
        conversations: [
          ...this.state.conversations,
          {
            id: uuidv4(),
            message: this.state.message,
            user: 'Mark',
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
        conversations={this.state.conversations}
        onChangeMessage={this.onChangeMessage}
        onSubmit={this.onSubmit}
      />
    );
  }
}
