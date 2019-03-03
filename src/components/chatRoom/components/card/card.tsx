import * as React from 'react';
import * as styles from './card.styles';

interface Props {
  user: string;
  message: string;
}

export const Card: React.StatelessComponent<Props> = (props) => (
  <div css={styles.card}>
    <h3 css={styles.user}>{props.user}</h3>
    <div css={styles.messageWrapper}>
      <p css={styles.message}>{props.message}</p>
    </div>
  </div>
);
