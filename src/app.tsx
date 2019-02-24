import * as React from 'react';
import { hot } from 'react-hot-loader';
import { ChatRoomComponent } from './Component/ChatRoom';

let App: React.StatelessComponent = () => (
  <ChatRoomComponent />
);

App = hot(module)(App);

export { App };
