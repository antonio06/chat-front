import { SerializedStyles } from '@emotion/css';
import * as React from 'react';
import * as styles from './typography.styles';

type Variant = 'body' | 'sub' | 'heading';

interface Props {
  className?: SerializedStyles | (SerializedStyles | undefined)[];
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
  variant?: Variant;
}

export const Typography: React.FunctionComponent<Props> = ({
  children,
  className,
  component: Component = 'p',
  variant = 'body',
}) => {
  return (
    <Component css={[assignClassName(variant), className]}>{children}</Component>
  );
};

const assignClassName = (variant: Variant): SerializedStyles => {
  let result = styles.body;

  if (variant === 'sub') {
    result = styles.sub;
  } else if (variant === 'heading') {
    result = styles.heading;
  }

  return result;
};
