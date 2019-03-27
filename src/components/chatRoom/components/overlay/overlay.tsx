import * as React from 'react';
import * as styles from './overlay.styles';

interface Props {
  isFadeout: boolean;
}

export const Overlay: React.StatelessComponent<Props> = (props) => (
  <div css={[styles.overlay, isFadeout(props)]}></div>
);

const isFadeout = (props: Props) => (
  !props.isFadeout ?
    '' :
    styles.fadeout
);
