import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ChatRoom } from './components/chatRoom';

let App: React.StatelessComponent = () => (
  <ChatRoom />
);

App = hot(module)(App);

export { App };
