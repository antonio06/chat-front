import * as React from 'react';
import { ChatRoom } from './chatRoom';

interface State {
  isFadeout: boolean;
}

export class ChatRoomContainer extends React.PureComponent<{}, State> {
  state = {
    isFadeout: true,
  };

  render() {
    return (
      <ChatRoom
        isFadeout={true}
      />
    );
  }
}
