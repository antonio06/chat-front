import * as React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

export const Type: React.StatelessComponent = () => (
  <TextareaAutosize
    placeholder="Type here something"
    onChange={() => {}}
    value=""
  />
);
