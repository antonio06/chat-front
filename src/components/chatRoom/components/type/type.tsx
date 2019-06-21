import * as React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import * as styles from './type.styles';

interface Props {
  message: string;
  onChangeMessage(newMessage: string): void;
  onSubmit(): void;
}

export const Type: React.FunctionComponent<Props> = ({ message, onChangeMessage, onSubmit }) => {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeMessage(event.target.value);
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div css={styles.type}>
      <TextareaAutosize
        placeholder="Type here something"
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={message}
        rows={3}
        cols={100}
        css={styles.textarea}
        name="message"
      />
    </div>
  );
};
