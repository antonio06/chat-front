import { css } from '@emotion/core';
import { theme } from '../../../../theme';
const borderRadiusAmount = '1.3rem';

export const modal = css`
  align-self: center;
  background-color: ${theme.colors.modal.background};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  padding: 5rem;
  position: fixed;
  text-align: center;
  z-index: 11;
`;

export const input = css`
  border-left: none;
  border-right: none;
  border-top: none;
  margin-bottom: 1rem;
  padding: 0.5rem;
  :focus {
    border-bottom-color: ${theme.colors.modal.inputBorder};
    outline: none;
  }
`;

export const button = css`
  background-image: linear-gradient(to top left, ${theme.colors.modal.button.primary},
   ${theme.colors.modal.button.secondary});
  border-bottom-left-radius: ${borderRadiusAmount};
  border-bottom-right-radius: ${borderRadiusAmount};
  border-top-left-radius: ${borderRadiusAmount};
  border-top-right-radius: ${borderRadiusAmount};
  border: none;
  color: white;
  font-family: ${theme.fontFamily};
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.5rem;
  :focus {
    outline: none;
  };
`;

export const fadeout = css`
  visibility: hidden;
`;

export const warning = css`
  font-size: 0.8rem;
  color: red;
`;

export const hidden = css`
  visibility: hidden;
`;
