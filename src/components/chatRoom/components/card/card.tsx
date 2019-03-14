import * as React from 'react';
import * as styles from './card.styles';
import { Conversation } from '../room/viewModel';

interface Props {
  conversation: Conversation;
}

export const Card: React.StatelessComponent<Props> = (props) => (
  <div css={styles.card}>
    <h3 css={styles.user}>{props.conversation.user}</h3>
    <div css={styles.messageWrapper}>
      <p css={styles.message}>{props.conversation.message}</p>
    </div>
  </div>
);
