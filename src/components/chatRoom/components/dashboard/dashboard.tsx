import * as React from 'react';
import { Card } from '../card';
import { Conversation } from '../room/viewModel';
import * as styles from './dashboard.style';

interface Props {
  conversations: Conversation[];
}

export const Dashboard: React.StatelessComponent<Props> = (props) => {
  return (
    <div css={styles.dashboard}>
      {
        props.conversations.map((conversation) =>
          <Card
            key={conversation.id}
            conversation={conversation}
          />,
        )
      }
    </div>
  );
};
