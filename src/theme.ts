require('typeface-quattrocento-sans');
const headerColor = '#f0f5f5';
const boldColor = '#727272';
const roomColor = '#e8f2f3';
const cardColor = '#fefffd';
const overlayColor = '#989898';
const modalColor = '#ffffff';
const modalElements = '#b6d6d9';

export const theme = {
  fontFamily: 'Quattrocento Sans',
  colors: {
    headerChat: {
      background: `${headerColor}`,
      title: `${boldColor}`,
    },
    room: {
      background: `${roomColor}`,
    },
    card: {
      background: `${cardColor}`,
    },
    overlay: {
      background: `${overlayColor}`,
    },
    modal: {
      background: `${modalColor}`,
      button: `${modalElements}`,
      inputBorder: `${modalElements}`,
    },
  },
};
