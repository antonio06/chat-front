import * as React from 'react';
import * as styles from './modal.styles';
import { Overlay } from '../../Components/overlay';

interface Props {
  isBlocked: boolean;
  showModal: boolean;
  userName: string;
  onChangeUserName(userName: string): void;
  onSubmint(): void;
}

export const Modal: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <Overlay
        showModal={showModal(props)}
      />
      <div css={[
        styles.modal,
        showModal(props),
      ]}>
        <input
          placeholder="Type name"
          value={props.userName}
          onChange={onchangeHandler(props)}
          css={styles.input}
        />
        <p css={[styles.warning, isHidden(props)]}>The user name is required.</p>
        <button disabled={props.isBlocked} css={styles.button} onClick={onSubmintHandler(props)}>Connect</button>
      </div>
    </>
  );
};

const showModal = (props: Props) => (
  !props.showModal ?
    '' :
    styles.fadeout
);

const isHidden = (props: Props) => (
  props.isBlocked ?
    '' :
    styles.hidden
);

const onchangeHandler = (props) => (event: React.ChangeEvent<HTMLInputElement>) => (
  props.onChangeUserName(event.target.value)
);

const onSubmintHandler = (props: Props) => (event: React.MouseEvent<HTMLButtonElement>) => {
  if (props.onSubmint) {
    event.preventDefault();
    props.onSubmint();
  }
};
