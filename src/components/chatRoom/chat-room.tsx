import * as React from 'react';
import * as styles from './chat-room.styles';
import { Modal } from './Components/modal';
import { Overlay } from './Components/overlay';
import { RoomContainer } from './Components/room';
import { UserCredential } from './viewModel';

interface Props {
  isBlocked: boolean;
  isFadeout: boolean;
  userCredential: UserCredential;
  userName: string;
  onChangeUserName(newUserName: string): void;
  onSubmint(): void;
}

// TODO: Move Overlay Component into the Modal
export const ChatRoom: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.chatRoom}>
      <Overlay
        isFadeout={props.isFadeout}
      />
      <Modal
        isFadeout={props.isFadeout}
        onChangeUserName={props.onChangeUserName}
        userName={props.userName}
        onSubmint={props.onSubmint}
        isBlocked={props.isBlocked}
      />
      <RoomContainer
        userName={props.userCredential.userName}
      />
    </div>
  );
};
