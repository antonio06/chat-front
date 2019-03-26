import { css } from '@emotion/core';
import { theme } from '../../../../theme';
const borderRadiusAmount = '0.5rem';

export const modal = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-self: center;
  margin-top: 10%;
  background-color: ${theme.colors.modal.background};
  border-radius: 5px;
  text-align: center;
  z-index: 11;
  border: 1px solid black;
  padding: 5rem;
`;

export const input = css`
  padding: 0.5rem;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-bottom: 1rem;
  :focus {
    outline: none;
    border-bottom-color: ${theme.colors.modal.inputBorder};
  }
`;

export const button = css`
  padding: 0.5rem;
  font-size: 1.2rem;
  background-color: ${theme.colors.modal.button};
  color: white;
  border: none;
  font-family: ${theme.fontFamily};
  font-weight: bold;
  border-top-left-radius: ${borderRadiusAmount};
  border-bottom-left-radius: ${borderRadiusAmount};
  border-top-right-radius: ${borderRadiusAmount};
  border-bottom-right-radius: ${borderRadiusAmount};
  :focus {
    outline: none;
  }
`;

export const fadeout = css`
  visibility: hidden;
`;
