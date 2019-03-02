import * as React from 'react';
import * as styles from './roomTitle.styles';

export const RoomTitleComponent: React.StatelessComponent = () => (
  <div css={styles.roomTitle}>
    <p css={styles.title}>Group</p>
  </div>
);
