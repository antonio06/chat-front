import * as React from 'react';
import * as styles from './room-title.styles';

export const RoomTitle: React.FunctionComponent = () => (
  <div css={styles.roomTitle}>
    <p css={styles.title}>Group</p>
  </div>
);
