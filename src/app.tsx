import { Global } from '@emotion/core';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as styles from './app.styles';
import { ChatRoomContainer } from './components/chat-room';

let App: React.StatelessComponent = () => {
  return (
    <>
      <Global styles={styles.resetStyles} />
      <ChatRoomContainer />
    </>
  );
};

App = hot(module)(App);

export { App };
