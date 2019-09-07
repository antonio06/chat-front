import { Global } from '@emotion/core';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as styles from './app.styles';
import { ChatContainer } from './components/chat';
import { SocketProvider } from './socket';

let App: React.StatelessComponent = () => {
  return (
    <>
      <Global styles={styles.resetStyles} />
      <SocketProvider>
        <ChatContainer />
      </SocketProvider>
    </>
  );
};

App = hot(module)(App);

export { App };
