import * as React from 'react';
import { Dashboard } from '../dashboard';
import { Type } from '../type';
import * as styles from './room.styles';
import { Conversation } from './viewModel';

interface Props {
  conversations: Conversation[];
  message: string;
  onChangeMessage(newMessage: string): void;
  onSubmit(): void;
}

export const Room: React.FunctionComponent<Props> = (props) => (
  <div css={styles.room}>
    <Dashboard
      conversations={props.conversations}
    />
    <Type
      message={props.message}
      onChangeMessage={props.onChangeMessage}
      onSubmit={props.onSubmit}
    />
  </div>
);
