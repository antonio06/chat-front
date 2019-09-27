import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const container = css`
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const myMessage = css`
  align-self: flex-end;
  div:first-of-type {
    background-color: ${theme.colors.conversation.primaryBackground};
    color: white;
    font-size: 1rem;
  };
  & h3 {
    text-align: right;
  }
`;

export const otherMessage = css`
  div:first-of-type {
    background-color: ${theme.colors.conversation.secondaryBackground};
  }
  & h3 {
    text-align: left;
  }
`;

export const username = css`
  color: ${theme.colors.secondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const textWrapper = css`
  display: inline-flex;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  border-radius: 0.2rem;
`;

export const text = css`
  white-space: pre-wrap;
`;
