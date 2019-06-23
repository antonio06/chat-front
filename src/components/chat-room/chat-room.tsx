import * as React from 'react';
import * as styles from './chat-room.styles';
import { Modal } from './Components/modal';
import { RoomContainer } from './Components/room';

interface Props {
  isBlocked: boolean;
  showModal: boolean;
  userName: string;
  onChangeUserName(newUserName: string): void;
  onSubmit(): void;
}

export const ChatRoom: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.chatRoom}>
      <Modal
        showModal={props.showModal}
        onChangeUserName={props.onChangeUserName}
        userName={props.userName}
        onSubmit={props.onSubmit}
        isBlocked={props.isBlocked}
      />
      <RoomContainer
        userName={props.userName}
      />
    </div>
  );
};
