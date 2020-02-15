import { css } from '@emotion/core';
import { theme } from '../../../../theme';

export const modal = css`
  align-items: flex-start;
  background-color: ${theme.colors.overlay.background};
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 10;
`;

export const card = css`
  background-color: ${theme.colors.modal.background};
  border-radius: 0.5rem;
  display: inline-block;
  margin: 10% auto 0;
  padding: 8rem;
  text-align: center;
`;

export const input = css`
  border-left: none;
  border-right: none;
  border-top: none;
  display: block;
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.body};
  padding: 0.7rem 0;
  :focus {
    border-bottom-color: ${theme.colors.modal.inputBorder};
    outline: none;
  }
`;

export const button = css`
  background-color: ${theme.colors.modal.button.background};
  border-radius: 0.4rem;
  cursor: pointer;
  display: block;
  width: 100%;
  border: none;
  color: ${theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1.5rem;
  padding: 0.7rem;
  :focus {
    outline: none;
  };
`;

export const error = css`
  color: ${theme.colors.common.error};
  text-align: left;
  margin-top: 1rem;
`;
