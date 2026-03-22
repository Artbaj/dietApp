import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Center,
  InputGroup,
  InputRightElement,
  IconButton,
  Circle,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MotionBox = motion(Box);
const MotionCircle = motion(Circle);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userSession = localStorage.getItem("isLoggedIn");
    if (userSession === "true") {
      //router.push("/Home");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    localStorage.setItem("isLoggedIn", "true");
    setTimeout(() => {
      router.push("/Home");
    }, 1200);
  };

  // --- Glassmorphic Design System ---
  const GlassCardStyle = {
    bg: "rgba(255, 255, 255, 0.07)", // Slightly more opaque for NNG readability
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)", // Safari Support
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    borderRadius: "28px",
    position: "relative" as const,
    zIndex: 1,
  };

  const GlassInputStyle = {
    bg: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "white",
    height: "52px",
    _placeholder: { color: "whiteAlpha.400" },
    _hover: { bg: "rgba(255, 255, 255, 0.08)" },
    _focus: {
      bg: "rgba(255, 255, 255, 0.12)",
      borderColor: "whiteAlpha.400",
      boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.2)",
    },
    borderRadius: "14px",
    transition: "all 0.3s ease",
  };

  return (
    <Center
      h="100vh"
      w="100vw"
      bg="#0f0c29"
      overflow="hidden"
      position="relative"
    >
      {/* Background Decorative Elements (The "Texture") */}
      <MotionCircle
        size="400px"
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        position="absolute"
        top="-10%"
        right="-5%"
        filter="blur(80px)"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <MotionCircle
        size="350px"
        bg="linear-gradient(135deg, #FF0080 0%, #7928CA 100%)"
        position="absolute"
        bottom="5%"
        left="-5%"
        filter="blur(70px)"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <MotionBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        w="full"
        maxW="420px"
        zIndex={2}
        px={6}
      >
        <VStack spacing={8} align="stretch">
          <VStack spacing={1}>
            <Heading
              size="xl"
              color="white"
              fontWeight="300"
              letterSpacing="-0.5px"
            >
              Nutri
              <Text as="span" fontWeight="700">
                Track
              </Text>
            </Heading>
            <Text
              color="whiteAlpha.500"
              fontSize="xs"
              fontWeight="600"
              letterSpacing="3px"
            >
              INTELLIGENT DIET
            </Text>
          </VStack>

          <Box p={{ base: 8, md: 10 }} {...GlassCardStyle}>
            <form onSubmit={handleLogin}>
              <VStack spacing={5}>
                <FormControl>
                  <FormLabel
                    color="whiteAlpha.600"
                    fontSize="10px"
                    fontWeight="800"
                    letterSpacing="1px"
                    ml={1}
                  >
                    ACCOUNT ID
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="jane@doe.com"
                    {...GlassInputStyle}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel
                    color="whiteAlpha.600"
                    fontSize="10px"
                    fontWeight="800"
                    letterSpacing="1px"
                    ml={1}
                  >
                    SECRET KEY
                  </FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...GlassInputStyle}
                    />
                    <InputRightElement h="52px">
                      <IconButton
                        variant="unstyled"
                        display="flex"
                        color="whiteAlpha.400"
                        _hover={{ color: "white" }}
                        aria-label="Toggle password"
                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button
                  type="submit"
                  bg="white"
                  color="gray.900"
                  w="full"
                  h="54px"
                  fontSize="sm"
                  fontWeight="800"
                  borderRadius="14px"
                  isLoading={isLoading}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 15px 30px rgba(255,255,255,0.1)",
                  }}
                  _active={{ transform: "scale(0.98)" }}
                >
                  AUTHENTICATE
                </Button>
              </VStack>
            </form>
          </Box>

          <Text
            textAlign="center"
            fontSize="xs"
            color="whiteAlpha.400"
            fontWeight="600"
          >
            SECURE ACCESS ONLY.{" "}
            <Text
              as="span"
              color="white"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              REQUEST ACCESS
            </Text>
          </Text>
        </VStack>
      </MotionBox>
    </Center>
  );
};

export default LoginPage;
