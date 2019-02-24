import * as React from 'react';
import * as styles from './roomTitle.styles';

export const RoomTitleComponent: React.StatelessComponent = () => (
  <div className={styles.roomTitle}>
    <p className={styles.title}>Group</p>
  </div>
);
