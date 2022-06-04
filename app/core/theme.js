import { DefaultTheme, DarkTheme, configureFonts } from 'react-native-paper';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Silka Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Silka Medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Silka Bold',
      fontWeight: 'normal',
    },
    semiBold: {
      fontFamily: 'Silka SemiBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Silka Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Silka Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Silka Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Silka Medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Silka Bold',
      fontWeight: 'normal',
    },
    semiBold: {
      fontFamily: 'Silka SemiBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Silka Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Silka Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Silka Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Silka Medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Silka-Bold',
      fontWeight: 'normal',
    },
    semiBold: {
      fontFamily: 'Silka SemiBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Silka Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Silka Thin',
      fontWeight: 'normal',
    },
  },
};

export const lightTheme = {
  ...DefaultTheme,
  ...NavigationDefaultTheme,
  fonts: configureFonts(fontConfig),
  myOwnProperty: true,
  // Specify custom property in nested object

  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    white: '#ffffff',
    black: '#000000',
    backGround: '#FAFCFE',
    border: '#CCD4DD',
    blue: '#2B1190',
    green: '#68DDBA',
    tab: '#2B1190',
    txtgrey: '#7B848D',
    txtWhite: '#ffffff',
    txtBlack: '#000',

    txtBlue: '#2B1190',
    txtGreen: '#68DDBA',
    toggle: '#000',
  },
};
export const darkTheme = {
  ...DarkTheme,
  ...NavigationDarkTheme,
  fonts: configureFonts(fontConfig),
  myOwnProperty: true,
  // Specify custom property in nested object
  dark: true,

  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: '#3498db',
    black: '#000000',
    white: '#161B21',
    txtBlack: '#ffffff',
    backGround: '#0D1116',
    border: '#CCD4DD',
    blue: '#68DDBA',
    green: '#68DDBA',
    tab: '#2B1190',
    txtgrey: '#CCD4DD',
    txtWhite: '#161B21',
    txtBlue: '#FFF',
    toggle: '#FFF',
  },
};
