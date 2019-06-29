import * as React from 'react';
import { Message } from '../message';
import { ChatMessage } from '../room/view-model';
import * as styles from './conversation.style';

interface Props {
  conversation: ChatMessage[];
}

export const Conversation: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.conversation}>
      {
        props.conversation.map((message) =>
          <Message
            key={message.id}
            message={message}
          />,
        )
      }
    </div>
  );
};
