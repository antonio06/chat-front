import * as React from 'react';
import * as styles from './modal.styles';

export const Modal: React.StatelessComponent = () =>  (
  <div css={styles.modal}>
    <input
      placeholder="Type name"
      css={styles.input}
    />
    <button css={styles.button}>Conect</button>
  </div>
);
