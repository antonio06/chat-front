import * as React from 'react';
import { Card } from '../card';
import { Conversation } from '../room/view-model';
import * as styles from './message.style';

interface Props {
  conversation: Conversation[];
}

export const Messages: React.StatelessComponent<Props> = (props) => {
  return (
    <div css={styles.messages}>
      {
        props.conversation.map((message) =>
          <Card
            key={message.id}
            message={message}
          />,
        )
      }
    </div>
  );
};
