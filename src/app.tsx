import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ChatRoomContainer } from './components/chatRoom';
import * as styles from './app.styles';
import { Global } from '@emotion/core';

let App: React.StatelessComponent = () => (
  <>
    <Global
      styles={
        styles.resetStyles
      }
    />
    <ChatRoomContainer />
  </>
);

App = hot(module)(App);

export { App };
