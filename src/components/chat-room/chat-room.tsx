import * as React from 'react';
import * as styles from './chat-room.styles';
import { Modal } from './Components/modal';
import { RoomContainer } from './Components/room';

interface Props {
  isBlockedButton: boolean;
  showModal: boolean;
  userName: string;
  onChangeUserName(newUserName: string): void;
  onSubmitModalInput(): void;
}

export const ChatRoom: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.chatRoom}>
      <Modal
        isOpen={props.showModal}
        onChangeUserName={props.onChangeUserName}
        userName={props.userName}
        onSubmitModalInput={props.onSubmitModalInput}
        isBlockedButton={props.isBlockedButton}
      />
      <RoomContainer
        userName={props.userName}
      />
    </div>
  );
};
