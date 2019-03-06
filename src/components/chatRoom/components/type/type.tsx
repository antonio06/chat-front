import * as React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import * as styles from './type.styles';

export const Type: React.StatelessComponent = () => (
  <div css={styles.type}>
    <TextareaAutosize
      placeholder="Type here something"
      onChange={() => { }}
      value=""
      rows={3}
      cols={100}
      css={styles.textarea}
    />
  </div>
);
