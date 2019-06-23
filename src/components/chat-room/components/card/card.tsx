import * as React from 'react';
import { Conversation } from '../room/view-model';
import * as styles from './card.styles';

interface Props {
  message: Conversation;
}

export const Card: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      {
        props.message.text &&
        <div css={styles.card}>
          <h3 css={styles.user}>{props.message.user}</h3>
          <div css={styles.messageWrapper}>
            <p css={styles.message}>{props.message.text}</p>
          </div>
        </div>
      }
    </>
  );
};
