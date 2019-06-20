import * as React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import * as styles from './type.styles';

interface Props {
  message: string;
  onChangeMessage(newMessage: string): void;
}

export const Type: React.FunctionComponent<Props> = (props) => (
  <div css={styles.type}>
    <TextareaAutosize
      placeholder="Type here something"
      onChange={onChangeHandler(props)}
      value={props.message}
      rows={3}
      cols={100}
      css={styles.textarea}
      name="message"
    />
  </div>
);

const onChangeHandler = (props: Props) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  props.onChangeMessage(event.target.value);
};
