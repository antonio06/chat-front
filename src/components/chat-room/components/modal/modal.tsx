import * as React from 'react';
import { Overlay } from './component/overlay';
import * as styles from './modal.styles';

interface Props {
  isBlockedButton: boolean;
  isOpen: boolean;
  userName: string;
  onChangeUserName(userName: string): void;
  onSubmitModalInput(): void;
}

export const Modal: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Overlay
        showOverlay={isShowElement(props)}
      />
      <div css={[
        styles.modal,
        isShowElement(props),
      ]}>
        <input
          placeholder="Type name"
          value={props.userName}
          onChange={onchangeHandler(props)}
          css={styles.input}
        />
        <p css={[styles.warning, isHidden(props)]}>The user name is required.</p>
        <button disabled={props.isBlockedButton} css={styles.button} onClick={onSubmintHandler(props)}>Connect</button>
      </div>
    </>
  );
};

const isShowElement = (props: Props) => (
  !props.isOpen ?
    '' :
    styles.hidden
);

const isHidden = (props: Props) => (
  props.isBlockedButton ?
    '' :
    styles.hidden
);

const onchangeHandler = (props) => (event: React.ChangeEvent<HTMLInputElement>) => (
  props.onChangeUserName(event.target.value)
);

const onSubmintHandler = (props: Props) => (event: React.MouseEvent<HTMLButtonElement>) => {
  if (props.onSubmitModalInput) {
    event.preventDefault();
    props.onSubmitModalInput();
  }
};
