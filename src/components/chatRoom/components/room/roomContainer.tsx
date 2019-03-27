import * as React from 'react';
import { Room } from './room';
import { Conversation, defaultConversationValues } from './viewModel';
const uuidv4 = require('uuid/v4');

interface Props {
  userName: string;
}

interface State {
  message: string;
  conversations: Conversation[];
}

export class RoomContainer extends React.Component<Props, State> {
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
        conversations={this.state.conversations}
        onChangeMessage={this.onChangeMessage}
        onSubmit={this.onSubmit}
      />
    );
  }
}
