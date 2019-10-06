import { SerializedStyles } from '@emotion/css';
import * as React from 'react';
import * as styles from './typography.styles';

interface Props {
  className?: SerializedStyles;
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  variant?: 'body' | 'sub';
}

export const Typography: React.FunctionComponent<Props> = ({
  children,
  className,
  component: Component = 'p',
  variant = 'body',
}) => {
  return (
    <Component css={[variant === 'body' ? styles.body : styles.sub, className]}>{children}</Component>
  );
};
