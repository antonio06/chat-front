import * as React from 'react';
import { ChatRoom } from './chat-room';

interface State {
  isBlockedButton: boolean;
  showModal: boolean;
  userName: string;
}

export class ChatRoomContainer extends React.PureComponent<{}, State> {
  state = {
    showModal: false,
    userName: '',
    isBlockedButton: true,
  };

  onChangeUserName = (newUserName: string) => {
    this.setState({
      userName: newUserName,
      isBlockedButton: this.isBlockedButton(newUserName),
    });
  }

  isBlockedButton = (newUserName: string) => (
    newUserName === ''
  )

  onSubmitModalInput = () => {
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
        onSubmitModalInput={this.onSubmitModalInput}
        isBlockedButton={this.state.isBlockedButton}
      />
    );
  }
}
