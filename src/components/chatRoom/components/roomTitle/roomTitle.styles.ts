import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const roomTitle = css`
  background-color: ${theme.colors.headerChat.background};
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-top: 1rem;
`;

export const title = css`
  color: ${theme.colors.headerChat.title};
  font-family: ${theme.fontFamily};
  font-size: 2rem;
  font-weight: 900;
  margin: 0px;
  padding: 0px;
`;
