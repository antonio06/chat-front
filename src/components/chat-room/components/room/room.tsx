import * as React from 'react';
import { Conversation } from '../conversation';
import { TextBox } from '../text-box';
import * as styles from './room.styles';
import { ChatMessage } from './view-model';

interface Props {
  conversation: ChatMessage[];
  message: string;
  onChangeMessage(newMessage: string): void;
  onSubmit(): void;
}

export const Room: React.FunctionComponent<Props> = (props) => {
  return (
    <div css={styles.room}>
      <Conversation
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
