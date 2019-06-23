import * as React from 'react';
import { Conversation } from '../room/view-model';
import * as styles from './card.styles';

interface Props {
  conversation: Conversation;
}

export const Card: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      {
        props.conversation.message &&
        <div css={styles.card}>
          <h3 css={styles.user}>{props.conversation.user}</h3>
          <div css={styles.messageWrapper}>
            <p css={styles.message}>{props.conversation.message}</p>
          </div>
        </div>
      }
    </>
  );
};
