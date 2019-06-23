import * as React from 'react';
import { Card } from '../card';
import { Conversation } from '../room/view-model';
import * as styles from './dashboard.style';

interface Props {
  conversation: Conversation[];
}

export const Dashboard: React.StatelessComponent<Props> = (props) => {
  return (
    <div css={styles.dashboard}>
      {
        props.conversation.map((message) =>
          <Card
            key={message.id}
            conversation={message}
          />,
        )
      }
    </div>
  );
};
