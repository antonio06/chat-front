require('typeface-quattrocento-sans');
const roomColor = '#e8f2f3';
const cardColor = '#fefffd';
const overlayColor = '#989898';
const modalColor = '#ffffff';
const modalElements = '#84babf';

export const theme = {
  fontFamily: 'Quattrocento Sans',
  colors: {
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
      button: {
        primary: `${modalElements}`,
        secondary: '#437c80',
      },
      inputBorder: `${modalElements}`,
    },
  },
};
