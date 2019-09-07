import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const textBox = css`
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.mediaquery.mediunDevice}) {
    padding-left: 2.5rem;
  }
`;

export const textarea = css`
  padding: 1rem;
  resize: none;
  white-space: pre-wrap;

  @media (max-width: ${theme.mediaquery.mediunDevice}) {
    width: 80%;
  }
`;
