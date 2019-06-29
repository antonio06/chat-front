import * as React from 'react';
import * as styles from './modal.styles';

interface Props {
  isUserNameValid: boolean;
  isOpen: boolean;
  userName: string;
  onChangeUserName(userName: string): void;
  onSubmitUserName(): void;
}

export const Modal: React.FunctionComponent<Props> = (props) => {
  if (props.isOpen) {
    return null;
  }

  return (
    <>
      <div css={styles.overlay}></div>
      <div css={styles.modal}>
        <input
          placeholder="Type name"
          value={props.userName}
          onChange={onchangeHandler(props)}
          css={styles.input}
        />
        {
          !props.isUserNameValid &&
          <p css={styles.error}>The user name is required.</p>
        }
        <button disabled={!props.isUserNameValid} css={styles.button} onClick={onSubmitHandler(props)}>Connect</button>
      </div>
    </>
  );
};

const onchangeHandler = (props: Props) => (event: React.ChangeEvent<HTMLInputElement>) => (
  props.onChangeUserName(event.target.value)
);

const onSubmitHandler = (props: Props) => (event: React.MouseEvent<HTMLButtonElement>) => {
  if (props.onSubmitUserName) {
    event.preventDefault();
    props.onSubmitUserName();
  }
};
