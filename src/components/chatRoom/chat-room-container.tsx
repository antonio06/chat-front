import * as React from 'react';
import { ChatRoom } from './chat-room';
import { userCedentialDefaultValues, UserCredential } from './viewModel';

interface State {
  isFadeout: boolean;
  userName: string;
  userCredential: UserCredential;
  isBlocked: boolean;
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

  isBlockedButton = (newUserName) => (
    newUserName !== '' ?
    !this.state.isBlocked :
    true
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
