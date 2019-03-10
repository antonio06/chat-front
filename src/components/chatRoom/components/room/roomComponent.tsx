import * as React from 'react';
import { Room } from './room';

interface State {
  user: string;
  message: string;
}

export class RoomComponent extends React.Component<{}, State> {
  state = {
    user: '',
    message: '',
  };

  onChangeMessage = (newMessage: string) => {
    this.setState({
      message: newMessage,
    });
  }

  onSubmit = () => {
    this.setState({
      user: 'Mark',
      message: this.state.message,
  });
}

  render() {
    return (
      <Room
        message={this.state.message}
        user={this.state.user}
        onChangeMessage={this.onChangeMessage}
        onSubmit={this.onSubmit}
      />
    );
  }
}
