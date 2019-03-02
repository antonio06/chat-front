import * as React from 'react';
import * as styles from './roomTitle.styles';

export const RoomTitle: React.StatelessComponent = () => (
  <div css={styles.roomTitle}>
    <p css={styles.title}>Group</p>
  </div>
);
