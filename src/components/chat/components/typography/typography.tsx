import * as React from 'react';
import * as styles from './typography.styles';

interface Props {
  component: string;
  variant: string;
}

export const Typography: React.FunctionComponent<Props> = ({children}) => {
  return (
    <span css={styles.typography}>{children}</span>
  );
};
