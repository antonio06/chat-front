import * as React from 'react';
import { User } from '../../api/models';
import * as styles from './chat.styles';
import { Modal } from './components/modal';
import { RoomContainer } from './components/room';

interface Props {
  showModal: boolean;
  user: User | null;
  userName: string;
  errorMessage: string;
  onlineUsers: User[];
  onChangeUserName(newUserName: string): void;
  onSubmitUserName(): void;
}

export const Chat: React.FunctionComponent<Props> = (
  { showModal, user, userName, errorMessage,
     onlineUsers, onSubmitUserName, onChangeUserName }) => {
  return (
    <div css={styles.chat}>
      <Modal
        isOpen={showModal}
        onChangeUserName={onChangeUserName}
        userName={userName}
        onSubmitUserName={onSubmitUserName}
        errorMessage={errorMessage}
      />
      <RoomContainer
        user={user}
        onlineUsers={onlineUsers}
      />
    </div>
  );
};
