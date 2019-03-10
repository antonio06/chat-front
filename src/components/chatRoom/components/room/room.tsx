import * as React from 'react';
import { Dashboard } from '../dashboard';
import { Type } from '../type';
import * as styles from './room.styles';

export const Room: React.StatelessComponent = () => (
  <div css={styles.room}>
    <Dashboard />
    <Type />
  </div>
)
