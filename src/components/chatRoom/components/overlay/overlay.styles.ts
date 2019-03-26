import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const overlay = css`
  position: absolute;
  /* Pending to remove when room size its cool */
  /*top: 0;
  left: 0;*/
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.overlay.background};
  opacity: 0.5;
  z-index: 10;
`;

export const fadeout = css`
  visibility: hidden;
`;
