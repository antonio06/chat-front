import * as React from 'react';
import * as styles from './message.styles';
import { Message as MessageEntity } from '../room/view-model';
import { User } from '../../../../api/models';

interface Props {
  message: MessageEntity;
}

export const Message: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <div css={styles.message}>
      <h3 css={styles.user}>{getUserName(message.user)}</h3>
      <div css={styles.textWrapper}>
        <p css={styles.text}>{message.text}</p>
      </div>
    </div>
  );
};

const getUserName = (user: User | null) => {
  return user ? user.userName : 'unknown';
};
