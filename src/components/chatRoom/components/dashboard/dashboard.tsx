import * as React from 'react';
import * as styles from './dashboard.style';
import { Card } from '../card';
import { Conversation } from '../room/viewModel';

interface Props {
  conversations: Conversation[];
}

export const Dashboard: React.StatelessComponent<Props> = (props) => (
  <div css={styles.dashboard}>
    {
      props.conversations.map((conversation) =>
        <Card
          key={conversation.id}
          conversation={conversation}
        />
      )
    }
  </div>
);
