import * as React from 'react';
import { Dashboard } from './Components/dashboard';
import { RoomTitle } from './Components/roomTitle';

export const ChatRoom: React.StatelessComponent = () => (
  <>
    <RoomTitle />
    <Dashboard />
  </>
);
