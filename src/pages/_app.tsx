import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

// 1. Updated Theme for Glassmorphism
const theme = extendTheme({
  colors: {
    brand: {
      500: "#ffffff", // Pure white for a cleaner look
      400: "rgba(255, 255, 255, 0.8)",
    },
    cyan: {
      400: "#00E5FF", // Keeping a nice cyan for small accents
    },
  },
  styles: {
    global: {
      body: {
        // This ensures the purple gradient is everywhere by default
        background: "conic-gradient(from 315deg, #A740FF, #4514CC)",
        minHeight: "100vh",
        color: "white",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // 2. Global Auth Guard Logic
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Public paths that don't need a login
    const publicPaths = ["/"];
    const path = router.pathname;

    if (!isLoggedIn && !publicPaths.includes(path)) {
      // If not logged in and trying to access a subpage, go to login
      router.push("/");
    } else if (isLoggedIn && publicPaths.includes(path)) {
      // If already logged in and hitting the login page, skip to home
      //router.push("/Home");
    }
  }, [router.pathname]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
