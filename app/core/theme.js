import { DefaultTheme, configureFonts } from 'react-native-paper';


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
  }
};

export const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
    myOwnProperty: true,
    // Specify custom property in nested object
    
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      white:'#ffffff',
      black:'#000000',
      backGround:'#FAFCFE',
      border:'#CCD4DD',
      blue:'#2B1190',
      green:'#68DDBA',
      tab:'#2B1190',
      txtgrey:'#7B848D'
    },
  };