import * as React from 'react';
import * as styles from './dashboard.style';
import { Card } from '../card';

export const Dashboard: React.StatelessComponent = () => (
  <div css={styles.dashboard}>
    <Card />
    <Card />
    <Card />
  </div>
);
