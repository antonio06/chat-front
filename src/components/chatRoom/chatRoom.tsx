import * as React from 'react';
import { RoomTitle } from './Components/roomTitle';
import { RoomComponent } from './Components/room';
import { Modal } from './Components/modal';
import { Overlay } from './Components/overlay';
import * as styles from './chatRoom.styles';

interface Props {
  isFadeout: boolean;
}

export const ChatRoom: React.StatelessComponent<Props> = (props) => (
  <div css={styles.chatRoom}>
    <Overlay
      isFadeout={props.isFadeout}
    />
    <Modal
      isFadeout={props.isFadeout}
    />
    <RoomTitle />
    <RoomComponent />
  </div>
);
