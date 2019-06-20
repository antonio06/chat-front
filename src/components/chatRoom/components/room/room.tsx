import * as React from 'react';
import { Dashboard } from '../dashboard';
import { Type } from '../type';
import * as styles from './room.styles';
import { Conversation } from './viewModel';
const keyCode = 13;

interface Props {
  conversations: Conversation[];
  message: string;
  onChangeMessage(newMessage: string): void;
  onSubmit(): void;
  onResetForm(): void;
}

export const Room: React.FunctionComponent<Props> = (props) => (
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
  if (event.which === keyCode) {
    props.onSubmit();
    props.onResetForm();
  }
};
