import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const overlay = css`
  background-color: ${theme.colors.overlay.background};
  height: 100%;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  z-index: 10;
`;
