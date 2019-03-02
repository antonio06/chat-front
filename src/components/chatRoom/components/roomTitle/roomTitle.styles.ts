import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const roomTitle = css`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  background-color: ${theme.colors.headerChat};
`;

export const title = css`
  padding: 0px;
  margin: 0px;
  font-family: ${theme.font};
  font-weight: 900;
  font-size: 2rem;
  color: ${theme.colors.title};
`;
