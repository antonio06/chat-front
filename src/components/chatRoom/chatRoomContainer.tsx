import * as React from 'react';
import { ChatRoom } from './chatRoom';
import { UserCredential, userCedentialDefaultValues } from './viewModel';

interface State {
  isFadeout: boolean;
  userName: string;
  userCredential: UserCredential;
}

export class ChatRoomContainer extends React.PureComponent<{}, State> {
  state = {
    isFadeout: false,
    userName: '',
    userCredential: userCedentialDefaultValues(),
  };

  onChangeUserName = (newUserName: string) => {
    this.setState({
      userName: newUserName,
    });
  }

  onSubmint = () => {
    this.setState({
      userCredential: {
        userName: this.state.userName,
      },
      isFadeout: !this.state.isFadeout,
    })
  }

  render() {
    return (
      <ChatRoom
        isFadeout={this.state.isFadeout}
        onChangeUserName={this.onChangeUserName}
        userName={this.state.userName}
        onSubmint={this.onSubmint}
        userCredential={this.state.userCredential}
      />
    );
  }
}
