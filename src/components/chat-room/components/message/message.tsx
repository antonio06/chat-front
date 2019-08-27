import * as React from 'react';
import { User } from '../../../../api/models';
import { Message as MessageEntity } from '../room/view-model';
import * as styles from './message.styles';

interface Props {
  message: MessageEntity;
}

export const Message: React.FunctionComponent<Props> = ({ message: {text, user} }) => {
  return (
    <div css={styles.message}>
      <h3 css={styles.user}>{getUserName(user)}</h3>
      <div css={styles.textWrapper}>
        <p css={styles.text}>{text}</p>
      </div>
    </div>
  );
};

const getUserName = (user: User | null) => {
  return user ? user.userName : 'unknown';
};
