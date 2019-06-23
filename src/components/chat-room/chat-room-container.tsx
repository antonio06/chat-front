import * as React from 'react';
import { ChatRoom } from './chat-room';
import { userCedentialDefaultValues, UserCredential } from './view-model';

interface State {
  isBlocked: boolean;
  showModal: boolean;
  userCredential: UserCredential;
  userName: string;
}

export class ChatRoomContainer extends React.PureComponent<{}, State> {
  state = {
    showModal: false,
    userName: '',
    userCredential: userCedentialDefaultValues(),
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

  onSubmint = () => {
    this.setState({
      userCredential: {
        userName: this.state.userName,
      },
      showModal: !this.state.showModal,
    });
  }

  render() {
    return (
      <ChatRoom
        showModal={this.state.showModal}
        onChangeUserName={this.onChangeUserName}
        userName={this.state.userName}
        onSubmint={this.onSubmint}
        userCredential={this.state.userCredential}
        isBlocked={this.state.isBlocked}
      />
    );
  }
}
