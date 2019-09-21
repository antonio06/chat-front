import * as React from 'react';
import { animated, useTransition } from 'react-spring';
import * as styles from './modal.styles';

interface Props {
  isOpen: boolean;
  userName: string;
  errorMessage: string;
  onChangeUserName(userName: string): void;
  onSubmitUserName(): void;
}

export const Modal: React.FunctionComponent<Props> = (props) => {

  const hasError = Boolean(props.errorMessage);

  const animation = useTransition(props.isOpen, null, {
    from: { transform: 'translateX(-100vw)', opacity: 0 },
    enter: { transform: 'translateX(0)', opacity: 1 },
    leave: { transform: 'translateX(100vw)', opacity: 0 },
  });

  return (
    <>
      {animation.map(({ item, key, props: {transform, opacity} }) => (
        item &&
        <React.Fragment key={key}>
          <animated.div css={styles.overlay} style={{opacity}}/>
          <animated.div css={styles.modal} style={{transform}}>
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
        </React.Fragment>
      ))}
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
