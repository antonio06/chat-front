import * as React from 'react';
import { ChatRoom } from './chat-room';

interface State {
  isUserNameValid: boolean;
  showModal: boolean;
  userName: string;
}

export class ChatRoomContainer extends React.PureComponent<{}, State> {
  state = {
    showModal: false,
    userName: '',
    isUserNameValid: true,
  };

  onChangeUserName = (newUserName: string) => {
    this.setState({
      userName: newUserName,
      isUserNameValid: this.isUserNameValid(newUserName),
    });
  }

  isUserNameValid = (newUserName: string) => (
    newUserName === ''
  )

  onSubmitUserName = () => {
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
        onSubmitUserName={this.onSubmitUserName}
        isUserNameValid={this.state.isUserNameValid}
      />
    );
  }
}
