import * as React from 'react';
import { ChatRoom } from './chat-room';

interface State {
  isBlocked: boolean;
  showModal: boolean;
  userName: string;
}

export class ChatRoomContainer extends React.PureComponent<{}, State> {
  state = {
    showModal: false,
    userName: '',
    isBlocked: true,
  };

  onChangeUserName = (newUserName: string) => {
    this.setState({
      userName: newUserName,
      isBlocked: this.isBlockedButton(newUserName),
    });
  }

  isBlockedButton = (newUserName: string) => (
    newUserName !== '' ? false : true
  )

  onSubmit = () => {
    this.setState({
      userName: this.state.userName,
      showModal: !this.state.showModal,
    });
  }

  render() {
    return (
      <ChatRoom
        showModal={this.state.showModal}
        onChangeUserName={this.onChangeUserName}
        userName={this.state.userName}
        onSubmit={this.onSubmit}
        isBlocked={this.state.isBlocked}
      />
    );
  }
}
