import { css } from '@emotion/core';
import { theme } from '../../../../theme';
const borderRadiusAmount = '0.5rem';

export const modal = css`
  align-self: center;
  background-color: ${theme.colors.modal.background};
  border-radius: 5px;
  border: 1px solid black;
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
  background-color: ${theme.colors.modal.button};
  border-bottom-left-radius: ${borderRadiusAmount};
  border-bottom-right-radius: ${borderRadiusAmount};
  border-top-left-radius: ${borderRadiusAmount};
  border-top-right-radius: ${borderRadiusAmount};
  border: none;
  color: white;
  font-family: ${theme.fontFamily};
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem;
  :focus {
    outline: none;
  };
`;

export const fadeout = css`
  visibility: hidden;
`;
