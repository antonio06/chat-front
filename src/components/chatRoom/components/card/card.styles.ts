import { css } from '@emotion/core';
import { theme } from '../../../../theme';
const radiusAmount = '6px';

export const card = css`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const user = css`
  font-family: ${theme.font};
  font-weight: 900;
  padding-bottom: 1rem;
`;

export const messageWrapper = css`
  display: inline-flex;
  border-top-right-radius: ${radiusAmount};
  border-bottom-right-radius: ${radiusAmount};
  border-top-left-radius: ${radiusAmount};
  border-bottom-left-radius: ${radiusAmount};
  padding: 1.5rem;
  background-color: ${theme.colors.card};
`;

export const message = css`
  font-family: ${theme.font};
  font-weight: 300;
`;
