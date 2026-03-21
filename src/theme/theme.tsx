import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import {Button} from './components/button';
import { Anton, Manrope } from 'next/font/google';

const anton = Anton({
  subsets: ['latin'],
  weight: "400",
  display: "swap"
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: "600", // Adjust the weight as necessary or add more variations if needed
  display: "swap"
});
const config: ThemeConfig = {
    initialColorMode: 'light', // 'light' or 'dark' can also be used
    useSystemColorMode: true,
  };
  const styles =  {
      global: (props: any) => ({
        body: {
          bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
          color: props.colorMode === 'dark' ? 'black' : 'black',
        },
      }),
  };
  const fonts = {
      heading: anton.style.fontFamily,
      body: manrope.style.fontFamily,
  };
    

const colors = {
  brand: {
    50: '#F0EAF8', // Lightest shade
    100: '#D9D0F2',
    200: '#C2B6EB',
    300: '#AB9CE5',
    400: '#9482DE',
    500: '#805AD5', // Your primary brand color
    600: '#6A42BF',
    700: '#5430A9',
    800: '#3E1E93',
    900: '#2A0C7D'  // Darkest shade
  },
  secondary: {
    50: '#E0F2F1',
    100: '#B2DFDB',
    200: '#80CBC4',
    300: '#4DB6AC',
    400: '#26A69A',
    500: '#009688',
    600: '#00897B',
    700: '#00796B',
    800: '#00695C',
    900: '#004D40',
  },
}

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors, fonts, config, styles,
  components: {
    Button,
  },
});