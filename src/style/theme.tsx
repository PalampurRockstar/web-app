import { createTheme, PaletteColorOptions } from '@mui/material/styles';


const { palette } = createTheme();
const { augmentColor } = palette;
declare module '@mui/material/styles' {
  interface CustomPalette {
    anger: PaletteColorOptions;
    apple: PaletteColorOptions;
    steelBlue: PaletteColorOptions;
    violet: PaletteColorOptions;
    dark: PaletteColorOptions;
    light: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    anger: true;
    apple: true;
    steelBlue: true;
    violet: true;
    dark: true;
    light: true;
  }
}
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
export const AppTheme = createTheme({
  palette: {
    anger: createColor('#F40B27'),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#BC00A3'),
    dark: createColor('#000000'),
    light: createColor('#ffffff'),
  },
});