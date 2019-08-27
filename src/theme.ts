require('typeface-quattrocento-sans');
const roomColor = '#e8f2f3';
const messageColor = '#fefffd';
const overlayColor = '#989898';
const modalColor = '#ffffff';
const modalElements = '#84babf';
const myMessageColor = '#75a7e3';
const othersMessageUserColor = '##ffffff';

export const theme = {
  fontFamily: 'Quattrocento Sans',
  colors: {
    room: {
      background: `${roomColor}`,
    },
    conversation: {
      background: `${messageColor}`,
      message: {
        myMessage: `${myMessageColor}`,
        otherMessage: `${othersMessageUserColor}`,
      },
    },
    overlay: {
      background: `${overlayColor}`,
    },
    modal: {
      background: `${modalColor}`,
      button: {
        primary: `${modalElements}`,
        secondary: '#437c80',
      },
      inputBorder: `${modalElements}`,
    },
  },
};
