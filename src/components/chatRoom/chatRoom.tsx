import * as React from 'react';
import * as styles from './chatRoom.styles';
import { Modal } from './Components/modal';
import { Overlay } from './Components/overlay';
import { RoomContainer } from './Components/room';
import { RoomTitle } from './Components/roomTitle';

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
    <RoomContainer />
  </div>
);
