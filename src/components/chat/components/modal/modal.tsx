import * as React from 'react';
import { animated, useTransition } from 'react-spring';
import { Typography } from '../typography';
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
      {animation.map(({ item, key, props: { transform, opacity } }) => (
        item &&
        <animated.form css={styles.modal} key={key} onSubmit={onSubmitHandler(props)} style={{ opacity }}>
          <animated.div css={styles.card} style={{ transform }}>
            <input
              css={styles.input}
              onChange={onchangeHandler(props)}
              placeholder="Username"
              value={props.userName}
            />
            {
              hasError &&
              <Typography
                component="p"
                variant="body"
                className={styles.error}
              >
                {props.errorMessage}
              </Typography>
            }
            <button type="submit" css={styles.button}>Connect</button>
          </animated.div>
        </animated.form>
      ))}
    </>
  );
};

const onchangeHandler = (props: Props) => (event: React.ChangeEvent<HTMLInputElement>) => (
  props.onChangeUserName(event.target.value)
);

const onSubmitHandler = (props: Props) => (event: React.MouseEvent<HTMLFormElement>) => {
  if (props.onSubmitUserName) {
    event.preventDefault();
    props.onSubmitUserName();
  }
};
