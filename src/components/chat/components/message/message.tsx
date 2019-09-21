import { SerializedStyles } from '@emotion/css';
import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import { User } from '../../../../api/models';
import { Message as MessageEntity } from '../room/view-model';
import * as styles from './message.styles';

interface Props {
  message: MessageEntity;
  myUserId: string;
}

export const Message: React.FunctionComponent<Props> = ({ message: { text, user }, myUserId }) => {
  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div style={springProps} css={[
      styles.message,
      isMyMessage(myUserId, user),
    ]}>
      <h3 css={styles.user}>{getUserName(user)}</h3>
      <div css={styles.textWrapper}>
        <p css={styles.text}>{text}</p>
      </div>
    </animated.div>
  );
};

const getUserName = (user: User | null) => {
  return user ? user.userName : 'unknown';
};

const isMyMessage = (userId: string, user: User | null): SerializedStyles | string => {
  let result: SerializedStyles | string = '';

  if (user) {
    result = user.id === userId ?
      styles.myMessage :
      styles.otherMessage;
  }

  return result;
};
