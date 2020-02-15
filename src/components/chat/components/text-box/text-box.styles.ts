import { css } from '@emotion/core';

export const textBox = css`
  display: flex;
  width: 100%;
`;

export const textarea = css`
  padding: 1rem;
  font-size: 1.6rem;
  padding-top: 4rem;
  padding-left: 2rem;
  resize: none;
  white-space: pre-wrap;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
