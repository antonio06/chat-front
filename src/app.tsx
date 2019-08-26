import { Global } from '@emotion/core';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as styles from './app.styles';
import { ChatRoomContainer } from './components/chat-room';
import { SocketProvider } from './socket';

let App: React.StatelessComponent = () => {
  return (
    <>
      <Global styles={styles.resetStyles} />
      <SocketProvider>
        <ChatRoomContainer />
      </SocketProvider>
    </>
  );
};

App = hot(module)(App);

export { App };

