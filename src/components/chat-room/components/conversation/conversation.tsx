import * as React from 'react';
import { Message } from '../message';
import { Message as MessageEntity } from '../room/view-model';
import * as styles from './conversation.style';

interface Props {
  conversation: MessageEntity[];
}

export const Conversation: React.FunctionComponent<Props> = ({conversation}) => {
  return (
    <div css={styles.conversation}>
      {
        conversation.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))
      }
    </div>
  );
};
