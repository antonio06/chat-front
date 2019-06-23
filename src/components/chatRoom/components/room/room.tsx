import * as React from 'react';
import { Dashboard } from '../dashboard';
import { Type } from '../type';
import * as styles from './room.styles';
import { Conversation } from './viewModel';

interface Props {
  conversation: Conversation[];
  message: string;
  onChangeMessage(newMessage: string): void;
  onSubmit(): void;
}

// Conversation | Messages
// Type | TextBox/ChatBox

export const Room: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.room}>
      <Dashboard
        conversation={props.conversation}
      />
      <Type
        message={props.message}
        onChangeMessage={props.onChangeMessage}
        onSubmit={props.onSubmit}
      />
    </div>
  );
};
