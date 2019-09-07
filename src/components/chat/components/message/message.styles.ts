import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const message = css`
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const myMessage = css`
  align-self: flex-end;
  div:first-of-type {
    background-color: ${theme.colors.conversation.myMessage};
    color: white;
    font-size: 1.5rem;
  }
`;

export const otherMessage = css`
  div:first-of-type {
    background-color: ${theme.colors.conversation.otherMessage};
    font-size: 1.5rem;
  }
`;

export const user = css`
  font-family: ${theme.fontFamily};
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const textWrapper = css`
  background-color: ${theme.colors.conversation.otherMessage};
  display: inline-flex;
  padding: 1.5rem;
`;

export const text = css`
  font-family: ${theme.fontFamily};
  font-weight: 300;
  white-space: pre-wrap;
`;