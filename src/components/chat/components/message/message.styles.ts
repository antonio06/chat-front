import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const container = css`
  display: flex;
  flex-direction: column;
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const myUser = css`
  text-align: right;
`;

export const myMessage = css`
  align-self: flex-end;
  background-color: ${theme.colors.conversation.primaryBackground};
  color: ${theme.colors.secondary};
  font-size: 1.3rem;
`;

export const otherMessage = css`
  align-self: flex-start;
  background-color: ${theme.colors.conversation.secondaryBackground};
  color: ${theme.colors.primary};
  font-size: 1.3rem;
`;

export const username = css`
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

export const textWrapper = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 0.3rem;
`;

export const text = css`
  white-space: pre-wrap;
`;
