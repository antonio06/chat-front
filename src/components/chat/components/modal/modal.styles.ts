import { css } from '@emotion/core';
import { theme } from '../../../../theme';

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

export const overlay = css`
  background-color: ${theme.colors.overlay.background};
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 10;
`;

export const input = css`
  border-left: none;
  border-right: none;
  border-top: none;
  margin-bottom: 1rem;
  padding: 0.5rem;
  :focus {
    box-shadow: 0 8px 6px -6px #e8f2f3;
    border-bottom-color: ${theme.colors.modal.inputBorder};
    outline: none;
  }
`;

export const button = css`
  background-image: linear-gradient(to top left, ${theme.colors.modal.button.primary},
   ${theme.colors.modal.button.secondary});
  border-radius: 1.3rem;
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

export const error = css`
  color: red;
  font-size: 0.8rem;
`;
