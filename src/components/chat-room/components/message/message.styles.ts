import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const message = css`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const user = css`
  font-family: ${theme.fontFamily};
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const textWrapper = css`
  background-color: ${theme.colors.message.background};
  border-bottom: 6px;
  display: inline-flex;
  padding: 1.5rem;
`;

export const text = css`
  font-family: ${theme.fontFamily};
  font-weight: 300;
  white-space: pre-wrap;
`;
