import * as React from 'react';
import { hot } from 'react-hot-loader';

let App: React.StatelessComponent = () => (
  <h1>Hello React</h1>
);

App = hot(module)(App);

export { App };
