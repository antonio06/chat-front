import * as React from 'react';
import { Messages } from '../messages';
import { TextBox } from '../text-box';
import * as styles from './room.styles';
import { Message } from './view-model';

interface Props {
  conversation: Message[];
  message: string;
  onChangeMessage(newMessage: string): void;
  onSubmit(): void;
}

export const Room: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.room}>
      <Messages
        conversation={props.conversation}
      />
      <TextBox
        message={props.message}
        onChangeMessage={props.onChangeMessage}
        onSubmit={props.onSubmit}
      />
    </div>
  );
};
