import * as React from 'react';
import * as styles from './card.styles';

export const Card: React.StatelessComponent = () => (
  <div css={styles.wrapper}>
    <h3 css={styles.user}>Adrian Von Ziegler</h3>
    <div css={styles.card}>
      <p css={styles.message}>Hello everyone, What are you doing ?. I'm working right now</p>
    </div>
  </div>
);
