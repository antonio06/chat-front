import * as React from 'react';
import * as styles from './dashboard.style';
import { Card } from '../card';
import { Conversation } from '../room/viewModel';

interface Props {
  conversation: Conversation;
}

export const Dashboard: React.StatelessComponent<Props> = (props) => (
  <div css={styles.dashboard}>
    {
      props.conversation.message &&
      <Card
        conversation={props.conversation}
      />
    }
  </div>
);
