import * as React from 'react';
import { Message } from '../room/view-model';
import * as styles from './card.styles';

interface Props {
  message: Message;
}

export const Card: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.card}>
      <h3 css={styles.user}>{props.message.user}</h3>
      <div css={styles.messageWrapper}>
        <p css={styles.message}>{props.message.text}</p>
      </div>
    </div>
  );
};
