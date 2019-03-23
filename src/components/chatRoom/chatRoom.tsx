import * as React from 'react';
import { RoomTitle } from './Components/roomTitle';
import { RoomComponent } from './Components/room';
import { Modal } from './Components/modal';
import * as styles from './chatRoom.styles';

export const ChatRoom: React.StatelessComponent = () => (
  <div css={styles.chatRoom}>
    <div css={styles.overlay}></div>
    <Modal />
    <RoomTitle />
    <RoomComponent />
  </div>
);
