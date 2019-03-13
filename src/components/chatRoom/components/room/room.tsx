import * as React from 'react';
import { Dashboard } from '../dashboard';
import { Type } from '../type';
import * as styles from './room.styles';

interface Props {
  message: string;
  user: string;
  onChangeMessage: (newMessage: string) => void;
  onSubmit: (message: string, codeKey: number) => void;
}

export const Room: React.StatelessComponent<Props> = (props) => (
  <form css={styles.room} onKeyPress={sendMessage(props)}>
    <Dashboard
      user={props.user}
      message={props.message}
    />
    <Type
      message={props.message}
      onChangeMessage={props.onChangeMessage}
    />
  </form>
);

// Pending Refactor
const sendMessage = (props: Props) => (event: React.KeyboardEvent<HTMLElement>) => {
    props.onSubmit(props.message, event.which);
};
