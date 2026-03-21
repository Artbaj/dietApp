import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Button } from "./components/button";
import { Manrope, Inter } from "next/font/google";

// Manrope is great for headings - friendly and modern
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

// Inter is the king of readability for data and numbers
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const styles = {
  global: (props: any) => ({
    body: {
      // Soft background colors are easier on the eyes than pure white
      bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
      color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
    },
  }),
};

const fonts = {
  heading: manrope.style.fontFamily,
  body: inter.style.fontFamily,
};

const colors = {
  brand: {
    50: "#f2f9f2",
    100: "#e1f0e1",
    200: "#c5e2c5",
    300: "#99cb99",
    400: "#66aa66",
    500: "#48bb78", // Main "Healthy Green"
    600: "#38a169",
    700: "#2f855a",
    800: "#276749",
    900: "#22543d",
  },
  // Soft orange/coral for "Warning" or "High Calorie" accents
  accent: {
    50: "#fff5f5",
    500: "#feb2b2",
    600: "#fc8181",
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  config,
  styles,
  components: {
    Button: {
      baseStyle: {
        borderRadius: "xl", // Rounded buttons feel more modern/app-like
        fontWeight: "semibold",
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === "dark" ? "brand.500" : "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        }),
      },
    },
  },
});
