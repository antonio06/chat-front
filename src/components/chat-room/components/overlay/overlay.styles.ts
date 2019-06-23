import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const overlay = css`
  position: absolute;
  background-color: ${theme.colors.overlay.background};
  height: 100%;
  opacity: 0.5;
  width: 100%;
  z-index: 10;
`;

export const fadeout = css`
  visibility: hidden;
`;
