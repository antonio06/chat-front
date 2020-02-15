import * as React from 'react';
import { Conversation } from '../conversation';
import { TextBox } from '../text-box';
import * as styles from './room.styles';
import { Message } from './view-model';

interface Props {
  conversation: Message[];
  message: string;
  myUserId: string;
  onChangeMessage(newMessage: string): void;
  onSubmitMessage(): void;
}

export const Room: React.FunctionComponent<Props> = (
  { conversation, message, myUserId, onChangeMessage, onSubmitMessage }) => {
  return (
    <div css={styles.room}>
      <Conversation
        conversation={conversation}
        myUserId={myUserId}
      />
      <TextBox
        message={message}
        onChangeMessage={onChangeMessage}
        onSubmitMessage={onSubmitMessage}
      />
    </div>
  );
};
