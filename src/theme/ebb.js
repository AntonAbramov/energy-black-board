import { lighten, transparentize } from 'polished';
import { createMuiTheme, Theme } from '@material-ui/core';

export { withStyles } from '@material-ui/core';
const ebb0 = '#357CA2';

const defaultTextColor = '#404040';
const backgroundColor = '#fafafa';
const darkBackgroundColor = '#5b5b5b';
const primaryColor = ebb0;
const secondaryColor = '#26A69A';
const dangerColor = '#bd0000';
const successColor = '#00ab10';
const disabledColor = '#e8e8e826';

const primaryBackgroundColor = transparentize(0.8, ebb0);
const secondaryBackgroundColor = transparentize(0.8, secondaryColor);

const paletteType = 'light';

const todoOwnColor = lighten(0.1, '#F7F3E3');
const todoAssignedToMeColor = lighten(0.2, '#FABF12');
const todoAssignedByMeColor = lighten(0.2, '#14555A');
const outlookEventColor = lighten(0.2, '#e6884f');

export const themeObject = {

  primary: primaryColor,

  radius: 2,

  dateFormat: 'YYYY-MM-DD',

  dateTimeFormat: 'YYYY-MM-DD HH:mm',

  fixedGrid: {
    maxWidth: 1200,
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  fontWeight: {
    light: 300,
    medium: 400,
    bold: 500,
    xBold: 600,
    xxBold: 800,
  },

  sidebar: {
    defaultWidth: 250,
    narrowWidth: 56,
    backgroundColor: '',
    color: '',
  },

  spacing: {
    unit: 8,
  },

  palette: {
    type: paletteType,

    background: {
      default: backgroundColor,
      active: transparentize(0.9, secondaryColor),
    },

    primary: {
      background: primaryBackgroundColor,
      main: primaryColor,
      contrast: 'white',
      dark: darkBackgroundColor,
    },

    secondary: {
      background: secondaryBackgroundColor,
      main: secondaryColor,
      contrast: 'white',
    },

    error: {
      main: dangerColor,
      background: transparentize(0.9, dangerColor),
    },

    info: {
      background: '#b0b0b0',
      text: '#202020',
    },

    /**
     * palette.error ?
     */
    danger: {
      main: dangerColor,
    },

    success: {
      main: successColor,
    },

    disabled: {
      main: disabledColor,
    },

    text: {
      main: defaultTextColor,
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
    todos: {
      ownItem: todoOwnColor,
      assignedToMe: todoAssignedToMeColor,
      assignedByMe: todoAssignedByMeColor,
      outlookEvent: outlookEventColor,
      other: '',
    },
    secondaryLight: '#26a69a',
    secondaryDark: '#00766c',
  },
};

export const ebbTheme = createMuiTheme({
  typography: { useNextVariants: true },
  ...themeObject,
});
