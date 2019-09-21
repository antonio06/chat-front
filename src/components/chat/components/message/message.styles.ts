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
    font-size: 1rem;
  };
  & h3 {
    text-align: right;
  }
`;

export const otherMessage = css`
  div:first-of-type {
    background-color: ${theme.colors.conversation.otherMessage};
    font-size: 1rem;
  }
  & h3 {
    text-align: left;
  }
`;

export const user = css`
  font-family: ${theme.fontFamily};
  font-weight: 900;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const textWrapper = css`
  background-color: ${theme.colors.conversation.otherMessage};
  display: inline-flex;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-radius: 0.2rem;
`;

export const text = css`
  font-family: ${theme.fontFamily};
  font-size: 14px;
  white-space: pre-wrap;
`;
