import { css } from '@emotion/core';
import { theme } from '../../../../theme';
const radiusAmount = '6px';

export const card = css`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const user = css`
  font-family: ${theme.fontFamily};
  font-weight: 900;
  padding-bottom: 1rem;
`;

export const messageWrapper = css`
  background-color: ${theme.colors.card.background};
  border-bottom-left-radius: ${radiusAmount};
  border-bottom-right-radius: ${radiusAmount};
  border-top-left-radius: ${radiusAmount};
  border-top-right-radius: ${radiusAmount};
  display: inline-flex;
  padding: 1.5rem;
`;

export const message = css`
  font-family: ${theme.fontFamily};
  font-weight: 300;
  white-space: pre-wrap;
`;
