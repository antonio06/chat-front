import * as React from 'react';
import * as styles from './chat-room.styles';
import { Modal } from './components/modal';
import { RoomContainer } from './components/room';

interface Props {
  isUserNameValid: boolean;
  showModal: boolean;
  userName: string;
  onChangeUserName(newUserName: string): void;
  onSubmitUserName(): void;
}

export const ChatRoom: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.chatRoom}>
      <Modal
        isOpen={props.showModal}
        onChangeUserName={props.onChangeUserName}
        userName={props.userName}
        onSubmitUserName={props.onSubmitUserName}
        isUserNameValid={props.isUserNameValid}
      />
      <RoomContainer
        userName={props.userName}
      />
    </div>
  );
};
