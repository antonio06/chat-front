import * as React from 'react';
import { ChatRoom } from './chat-room';
import { userCedentialDefaultValues, UserCredential } from './view-model';

interface State {
  isBlocked: boolean;
  isFadeout: boolean;
  userCredential: UserCredential;
  userName: string;
}

export class ChatRoomContainer extends React.PureComponent<{}, State> {
  state = {
    isFadeout: false,
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
      isFadeout: !this.state.isFadeout,
    });
  }

  render() {
    return (
      <ChatRoom
        isFadeout={this.state.isFadeout}
        onChangeUserName={this.onChangeUserName}
        userName={this.state.userName}
        onSubmint={this.onSubmint}
        userCredential={this.state.userCredential}
        isBlocked={this.state.isBlocked}
      />
    );
  }
}
