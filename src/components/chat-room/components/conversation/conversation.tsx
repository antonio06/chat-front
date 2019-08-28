import * as React from 'react';
import { Message } from '../message';
import { Message as MessageEntity } from '../room/view-model';
import * as styles from './conversation.style';

interface Props {
  conversation: MessageEntity[];
  myUserId: string;
}

export const Conversation: React.FunctionComponent<Props> = ({conversation, myUserId}) => {
  return (
    <div css={styles.conversation}>
      {
        conversation.map((message) => (
          <Message
            key={message.id}
            message={message}
            myUserId={myUserId}
          />
        ))
      }
    </div>
  );
};
