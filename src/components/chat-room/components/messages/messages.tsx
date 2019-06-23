import * as React from 'react';
import { Card } from '../card';
import { Message } from '../room/view-model';
import * as styles from './message.style';

interface Props {
  conversation: Message[];
}

export const Messages: React.FunctionComponent<Props> = (props) => {
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
