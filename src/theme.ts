require('typeface-quattrocento-sans');
const mainChatColor = '#ECF1F5';
const otherMessage = '#FEFFFD';
const overlayColor = '#989898';
const modalColor = '#FFFFFF';
const modalElements = '#75A7E3';
const ownMessage = '#099AFF';

export const theme = {
  fontFamily: 'Quattrocento Sans',
  mediaquery: {
    mediunDevice: `${768}px`,
  },
  colors: {
    room: {
      background: `${mainChatColor}`,
    },
    conversation: {
      myMessage: `${ownMessage}`,
      otherMessage: `${otherMessage}`,
    },
    overlay: {
      background: `${overlayColor}`,
    },
    modal: {
      background: `${modalColor}`,
      button: {
        primary: `${ownMessage}`,
        secondary: `${mainChatColor}`,
      },
      inputBorder: `${modalElements}`,
    },
  },
};
