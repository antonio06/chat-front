import * as React from 'react';
import { Type } from './type';

interface State {
  message: string;
}

export class TypeComponent extends React.Component<{}, State> {
  state = {
    message: '',
  };

  onChangeMessage = (newMessage: string) => {
    this.setState({
      message: newMessage,
    });
  }

  render() {
    return (
      <Type
        message={this.state.message}
        onChangeMessage={this.onChangeMessage}
      />
    );
  }
}
