import * as React from 'react';
import { ChatMessage } from '../room/view-model';
import * as styles from './message.styles';

interface Props {
  message: ChatMessage;
}

export const Message: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.message}>
      <h3 css={styles.user}>{props.message.user}</h3>
      <div css={styles.textWrapper}>
        <p css={styles.text}>{props.message.text}</p>
      </div>
    </div>
  );
};
