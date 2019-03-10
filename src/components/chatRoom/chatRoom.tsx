import * as React from 'react';
import { RoomTitle } from './Components/roomTitle';
import { RoomComponent } from './Components/room';

export const ChatRoom: React.StatelessComponent = () => (
  <>
    <RoomTitle />
    <RoomComponent />
  </>
);
