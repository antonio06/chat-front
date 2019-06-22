import * as React from 'react';
import * as styles from './overlay.styles';

interface Props {
  isFadeout: boolean;
}

export const Overlay: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={[styles.overlay, isFadeout(props)]}></div>
  );
};

const isFadeout = (props: Props) => (
  !props.isFadeout ?
    '' :
    styles.fadeout
);
