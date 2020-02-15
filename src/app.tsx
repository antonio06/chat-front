import { Global } from '@emotion/core';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { globalStyles } from './app.styles';
import { ChatContainer } from './components/chat';
import { SocketProvider } from './socket';

let App: React.StatelessComponent = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <SocketProvider>
        <ChatContainer />
      </SocketProvider>
    </>
  );
};

App = hot(module)(App);

export { App };
