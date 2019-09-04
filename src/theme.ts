require('typeface-quattrocento-sans');
const roomColor = '#e8f2f3';
const messageColor = '#fefffd';
const overlayColor = '#989898';
const modalColor = '#ffffff';
const modalElements = '#75a7e3';
const myMessageColor = '#75a7e3';

export const theme = {
  fontFamily: 'Quattrocento Sans',
  colors: {
    room: {
      background: `${roomColor}`,
    },
    conversation: {
      myMessage: `${myMessageColor}`,
      otherMessage: `${messageColor}`,
    },
    overlay: {
      background: `${overlayColor}`,
    },
    modal: {
      background: `${modalColor}`,
      button: {
        primary: `#75a7e3`,
        secondary: '#e8f2f3',
      },
      inputBorder: `${modalElements}`,
    },
  },
};
