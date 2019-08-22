import * as React from 'react';
import { Message as MessageEntity } from '../room/view-model';
import * as styles from './conversation.style';
import { Message } from '../message';

interface Props {
  conversation: MessageEntity[];
}

export const Conversation: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.conversation}>
      {
        props.conversation.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))
      }
    </div>
  );
};
