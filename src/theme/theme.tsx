import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      html: {
        minHeight: "100vh",
        background: "#0f0c29", // Deep base for contrast
      },
      body: {
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
        // This creates your custom orb as a background element
        _before: {
          content: '""',
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
          width: "800px", // Scaled up for screen coverage
          height: "800px",
          borderRadius: "full",
          filter: "blur(60px)", // NNG recommends blurring background orbs for elegance
          opacity: 0.7,
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), 
            radial-gradient(ellipse at 70% 60%, #c3e060 0%, rgba(195, 224, 96, 0) 90%), 
            radial-gradient(ellipse at 30% 30%, #c3e060 0%, rgba(195, 224, 96, 0) 60%), 
            radial-gradient(ellipse at bottom left, #00a3cb 0%, rgba(0, 163, 203, 0) 70%), 
            linear-gradient(135deg, rgba(18, 46, 119, 0) 0%, rgba(18, 46, 119, 0) 75%, #122e77 100%), 
            linear-gradient(to right, #625793 0%, #d55d64 35%, #e49129 65%, #c0671c 100%)
          `,
          backgroundBlendMode:
            "lighten, saturation, screen, color, color-dodge, multiply",
        },
      },
    },
  },
  // Re-using the glass components from earlier...
  components: {
    Button: {
      baseStyle: {
        borderRadius: "14px",
      },
      variants: {
        glass: {
          bg: "whiteAlpha.200",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
          _hover: { bg: "whiteAlpha.300" },
        },
      },
    },
  },
});

export default theme;
