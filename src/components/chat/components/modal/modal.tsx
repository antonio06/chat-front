import * as React from 'react';
import * as styles from './modal.styles';
import { useSpring, animated } from 'react-spring';

interface Props {
  isOpen: boolean;
  userName: string;
  errorMessage: string;
  onChangeUserName(userName: string): void;
  onSubmitUserName(): void;
}

export const Modal: React.FunctionComponent<Props> = (props) => {
  if (props.isOpen) {
    return null;
  }

  const hasError = Boolean(props.errorMessage);
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 5000 },
  });

  return (
    <>
      <div css={styles.overlay}></div>
      <animated.div style={springProps} css={styles.modal}>
        <input
          placeholder="Type name"
          value={props.userName}
          onChange={onchangeHandler(props)}
          css={styles.input}
        />
        {
          hasError &&
          <p css={styles.error}>{props.errorMessage}</p>
        }
        <button css={styles.button} onClick={onSubmitHandler(props)}>Connect</button>
      </animated.div>
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
