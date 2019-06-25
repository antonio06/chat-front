import { SerializedStyles } from '@emotion/css';
import * as React from 'react';
import * as styles from './overlay.styles';

interface Props {
  showModal: string | SerializedStyles;
}

export const Overlay: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={[styles.overlay, props.showModal ? props.showModal : '']}></div>
  );
};
