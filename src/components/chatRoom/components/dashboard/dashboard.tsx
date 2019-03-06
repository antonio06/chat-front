import * as React from 'react';
import * as styles from './dashboard.style';
import { Card } from '../card';
import { Type } from '../type';

export const Dashboard: React.StatelessComponent = () => (
  <div css={styles.dashboard}>
    <Card
      user={'Adrian'}
      message={'Hi everyone. How are you ?. I am working right now'}
    />
    <Card
      user={'Melisa'}
      message={'Hello Adrian, when you will finish to work call me please'}
    />
    <Card
      user={'Paul'}
      message={'Melisa, where are you ?'}
    />
    <Type />
  </div>
);
