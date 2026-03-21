import React, { useState } from "react";
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
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Color logic for light/dark mode
  const bg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    setTimeout(() => {
      router.push("/Main");
    }, 1500);
  };

  return (
    <Center h="100vh" bg={bg} p={4}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <VStack spacing={8} align="stretch">
          <VStack spacing={2} textAlign="center">
            <Heading size="xl" color="brand.500">
              NutriTrack
            </Heading>
            <Text color="gray.500">Welcome back! Please login.</Text>
          </VStack>

          <Box
            bg={cardBg}
            p={8}
            rounded="2xl"
            shadow="xl"
            border="1px solid"
            borderColor={useColorModeValue("gray.100", "gray.600")}
          >
            <form onSubmit={handleLogin}>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    focusBorderColor="brand.500"
                    rounded="lg"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      focusBorderColor="brand.500"
                      rounded="lg"
                    />
                    <InputRightElement>
                      <IconButton
                        variant="ghost"
                        aria-label="Toggle password"
                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  colorScheme="brand"
                  size="lg"
                  w="full"
                  rounded="lg"
                  isLoading={isLoading}
                  loadingText="Logging in..."
                  onClick={() => {
                    setIsLoading(true);
                    // Short delay to show off the cool loading spinner
                    setTimeout(() => {
                      router.push("/Home");
                    }, 800);
                  }}
                >
                  Sign In
                </Button>
              </VStack>
            </form>
          </Box>

          <Text textAlign="center" fontSize="sm" color="gray.500">
            Don't have an account?{" "}
            <Text
              as="span"
              color="brand.500"
              fontWeight="bold"
              cursor="pointer"
            >
              Sign up
            </Text>
          </Text>
        </VStack>
      </motion.div>
    </Center>
  );
};

export default LoginPage;
