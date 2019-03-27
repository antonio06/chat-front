import * as React from 'react';
import * as styles from './chatRoom.styles';
import { Modal } from './Components/modal';
import { Overlay } from './Components/overlay';
import { RoomContainer } from './Components/room';
import { RoomTitle } from './Components/roomTitle';
import { UserCredential } from './viewModel';

interface Props {
  isFadeout: boolean;
  onChangeUserName: (newUserName: string) => void;
  userName: string;
  onSubmint: () => void;
  userCredential: UserCredential;
}

export const ChatRoom: React.StatelessComponent<Props> = (props) => (
  <div css={styles.chatRoom}>
    <Overlay
      isFadeout={props.isFadeout}
    />
    <Modal
      isFadeout={props.isFadeout}
      onChangeUserName={props.onChangeUserName}
      userName={props.userName}
      onSubmint={props.onSubmint}
    />
    <RoomTitle />
    <RoomContainer
      userName={props.userCredential.userName}
    />
  </div>
);
