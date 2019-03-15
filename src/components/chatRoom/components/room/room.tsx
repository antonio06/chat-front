import * as React from 'react';
import { Dashboard } from '../dashboard';
import { Type } from '../type';
import * as styles from './room.styles';
import { Conversation } from './viewModel';

interface Props {
  message: string;
  conversations: Conversation[];
  onChangeMessage: (newMessage: string) => void;
  onSubmit: () => void;
}

export const Room: React.StatelessComponent<Props> = (props) => (
  <form css={styles.room} onKeyPress={sendMessage(props)}>
    <Dashboard
      conversations={props.conversations}
    />
    <Type
      message={props.message}
      onChangeMessage={props.onChangeMessage}
    />
  </form>
);

const sendMessage = (props: Props) => (event: React.KeyboardEvent<HTMLElement>) => {
  if (event.which === 13) {
    props.onSubmit();
  }
};