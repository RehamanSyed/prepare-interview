import { checkboxAnatomy as checkbox } from "@chakra-ui/anatomy";
import {
  theme as origTheme,
  extendTheme,
  defineStyle,
  defineStyleConfig,
  createMultiStyleConfigHelpers as multiStyleConfig,
} from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = multiStyleConfig(
  checkbox.keys
);
const sizes = {
  sm: definePartsStyle({
    label: { fontSize: "sm" },
  }),
  md: definePartsStyle({
    label: { fontSize: "14px" },
    control: {
      padding: 2,
      bg: "white",
      borderRadius: 4,
      fontWeight: "normal",
      outline: "none",
    },
  }),
  lg: definePartsStyle({ label: { fontSize: "lg" } }),
};
const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
    arabic: "Noto Kufi Arabic, sans-serif",
    english: "Poppins, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "22px",
  },
  colors: {
    primary: {
      50: "rgb(0 153 255 / 5%)",
      100: "rgb(0 153 255 / 10%)",
      300: "rgb(0 153 255 / 30%)",
      500: "rgb(0 153 255)",
      400: "rgb(0 153 255 / 40%)",
      700: "rgb(0 153 255 / 70%)",
      900: "rgb(0 153 255)",
    },
    secondary: {
      50: "rgb(255 164 0 / 5%)",
      100: "rgb(255 164 0 / 10%)",
      300: "rgb(255 164 0 / 30%)",
      500: "rgb(255 164 0)",
      400: "rgb(255 164 0 / 40%)",
      700: "rgb(255 164 0 / 70%)",
      900: "rgb(255 164 0)",
    },
    black: {
      50: "rgb(51 51 51 / 5%)",
      100: "rgb(51 51 51 / 10%)",
      300: "rgb(51 51 51 / 30%)",
      500: "rgb(51 51 51)",
      400: "rgb(51 51 51 / 40%)",
      700: "rgb(51 51 51 / 70%)",
      900: "rgb(51 51 51)",
    },
    light: "#F6F6F6",
    white: "#fff",
  },
  sizes: {
    container: {
      sm: "30em", // 480px
      md: "48em", // 768px
      lg: "62em", // 992px
      xl: "80em", // 1280px
      "2xl": "96em", // 1536px
      "3xl": "120em", // 1920px
    },
  },
  components: {
    Checkbox: defineMultiStyleConfig({ sizes }),

    Alert: {
      status: {
        success: {
          bg: "primary.900",
          fontSize: 14,
        },
      },
      variants: {
        solid: (props) => {
          // only applies to `solid` variant

          const { colorScheme: c } = props;

          if (c !== "blue") {
            return origTheme.components.Alert.variants.solid(props);
          }
          return {
            container: {
              bg: "gray.900",
              fontSize: "xs",
              color: "white",
            },
            title: {
              fontWeight: "light",
              letterSpacing: "0.5px",
            },
          };
        },
      },
    },
    Button: defineStyleConfig({
      baseStyle: defineStyle({
        fontWeight: "medium",
        height: "1em",
      }),

      variants: {
        solid: defineStyle((props) => {
          const { colorScheme: c } = props;
          return {
            fontWeight: "regular",
            color: "white",
          };
        }),
      },
    }),
  },
});

export default theme;
