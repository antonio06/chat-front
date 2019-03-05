import * as React from 'react';
import { Dashboard } from './Components/dashboard';
import { RoomTitle } from './Components/roomTitle';
import { Type } from './Components/type';

export const ChatRoom: React.StatelessComponent = () => (
  <>
    <RoomTitle />
    <Dashboard />
    <Type />
  </>
);
