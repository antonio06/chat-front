import * as React from 'react';
import * as styles from './dashboard.style';
import { Card } from '../card';

interface Props {
  user: string;
  message: string;
}

export const Dashboard: React.StatelessComponent<Props> = (props) => (
  <div css={styles.dashboard}>
    <Card
      user={props.user}
      message={props.message}
    />
  </div>
);
