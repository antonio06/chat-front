import { css } from '@emotion/core';

export const modal = css`
  width: 300px;
  height: 200px;
  line-height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -150px;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  z-index: 11;
  border: 1px solid black;
`;
