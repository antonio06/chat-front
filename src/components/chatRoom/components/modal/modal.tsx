import * as React from 'react';
import * as styles from './modal.styles';

interface Props {
  isFadeout: boolean;
}

export const Modal: React.StatelessComponent<Props> = (props) => (
  <div css={[
    styles.modal,
    isFadeout(props),
  ]}>
    <input
      placeholder="Type name"
      css={styles.input}
    />
    <button css={styles.button}>Conect</button>
  </div>
);

const isFadeout = (props: Props) => (
  !props.isFadeout ?
    styles.fadeout :
    ''
);
