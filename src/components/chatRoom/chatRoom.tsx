import * as React from 'react';
import { RoomTitle } from './Components/roomTitle';
import { Room } from './Components/room';

export const ChatRoom: React.StatelessComponent = () => (
  <>
    <RoomTitle />
    <Room />
  </>
);
