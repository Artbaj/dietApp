import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "xl", // Softer edges look better with glass
    transition: "all 0.2s ease-in-out",
  },
  variants: {
    glass: {
      bg: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      color: "white",
      _hover: {
        bg: "rgba(255, 255, 255, 0.2)",
        transform: "translateY(-2px)",
      },
    },
    solid: {
      bg: "brand.500",
      color: "white",
      _hover: { bg: "brand.600" },
    },
  },
  defaultProps: {
    variant: "glass",
  },
});
