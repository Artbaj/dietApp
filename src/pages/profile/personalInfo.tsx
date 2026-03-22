import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
  Container,
  SimpleGrid,
  InputGroup,
  InputRightAddon,
  useToast,
} from "@chakra-ui/react";
import { FaChevronLeft, FaSave } from "react-icons/fa";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const EditInfo = () => {
  const router = useRouter();
  const toast = useToast();
  const [isSaving, setIsSaving] = useState(false);

  // Global Animated Background Logic
  const animatedBg = {
    background: `
      radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), 
      radial-gradient(ellipse at 70% 60%, #c3e060 0%, rgba(195, 224, 96, 0) 90%), 
      radial-gradient(ellipse at 30% 30%, #c3e060 0%, rgba(195, 224, 96, 0) 60%), 
      radial-gradient(ellipse at bottom left, #00a3cb 0%, rgba(0, 163, 203, 0) 70%), 
      linear-gradient(135deg, rgba(18, 46, 119, 0) 0%, rgba(18, 46, 119, 0) 75%, #122e77 100%), 
      linear-gradient(to right, #625793 0%, #d55d64 35%, #e49129 65%, #c0671c 100%)
    `,
    backgroundBlendMode: "lighten,saturation,screen,color,color-dodge,multiply",
  };

  const glassVariant = {
    bg: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
    borderRadius: "24px",
  };

  const glassInputStyle = {
    bg: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "white",
    fontSize: "sm",
    fontWeight: "600",
    _placeholder: { color: "whiteAlpha.400" },
    _hover: { bg: "rgba(255, 255, 255, 0.1)" },
    _focus: {
      bg: "rgba(255, 255, 255, 0.12)",
      borderColor: "#00E5FF",
      boxShadow: "0 0 15px rgba(0, 229, 255, 0.3)",
    },
    borderRadius: "xl",
    transition: "all 0.2s",
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Profile Updated",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      router.back();
    }, 1200);
  };

  return (
    <Box minH="100vh" position="relative" overflow="hidden" bg="#0f0c29">
      {/* Background Orbs */}
      <MotionBox
        position="fixed"
        top="-10%"
        left="-10%"
        w="120vw"
        h="120vh"
        zIndex={0}
        filter="blur(60px)"
        opacity={0.5}
        {...animatedBg}
        animate={{
          x: [-10, 10, -10],
          y: [-10, 15, -10],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <Container
        maxW="container.md"
        pt={6}
        pb={10}
        position="relative"
        zIndex={1}
      >
        {/* Top Navigation */}
        <HStack mb={8} spacing={4}>
          <IconButton
            aria-label="Back"
            icon={<FaChevronLeft />}
            variant="ghost"
            color="white"
            rounded="full"
            _hover={{ bg: "whiteAlpha.200" }}
            onClick={() => router.back()}
          />
          <Heading
            size="md"
            color="white"
            fontWeight="900"
            letterSpacing="-0.5px"
          >
            Personal Information
          </Heading>
        </HStack>

        <VStack spacing={8} align="stretch">
          {/* Section: Basic Info */}
          <Box {...glassVariant} p={6}>
            <VStack spacing={6}>
              <FormControl>
                <FormLabel
                  fontWeight="900"
                  fontSize="10px"
                  color="#00E5FF"
                  letterSpacing="2px"
                >
                  FULL NAME
                </FormLabel>
                <Input defaultValue="Maciek" {...glassInputStyle} h="50px" />
              </FormControl>

              <FormControl>
                <FormLabel
                  fontWeight="900"
                  fontSize="10px"
                  color="#00E5FF"
                  letterSpacing="2px"
                >
                  EMAIL ADDRESS
                </FormLabel>
                <Input
                  defaultValue="maciek@example.com"
                  {...glassInputStyle}
                  h="50px"
                />
              </FormControl>
            </VStack>
          </Box>

          {/* Section: Physical Stats */}
          <Box>
            <Text
              fontWeight="900"
              fontSize="10px"
              color="#FF9100"
              ml={4}
              mb={3}
              letterSpacing="3px"
            >
              PHYSICAL STATS
            </Text>
            <Box {...glassVariant} p={6}>
              <SimpleGrid columns={2} spacing={6}>
                <FormControl>
                  <FormLabel
                    fontWeight="900"
                    fontSize="10px"
                    color="whiteAlpha.500"
                    letterSpacing="1px"
                  >
                    WEIGHT
                  </FormLabel>
                  <InputGroup>
                    <Input
                      defaultValue="82"
                      {...glassInputStyle}
                      borderRightRadius="0"
                    />
                    <InputRightAddon
                      children="kg"
                      bg="whiteAlpha.100"
                      border="1px solid rgba(255,255,255,0.1)"
                      borderLeft="none"
                      color="whiteAlpha.600"
                      fontWeight="800"
                      fontSize="xs"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontWeight="900"
                    fontSize="10px"
                    color="whiteAlpha.500"
                    letterSpacing="1px"
                  >
                    HEIGHT
                  </FormLabel>
                  <InputGroup>
                    <Input
                      defaultValue="185"
                      {...glassInputStyle}
                      borderRightRadius="0"
                    />
                    <InputRightAddon
                      children="cm"
                      bg="whiteAlpha.100"
                      border="1px solid rgba(255,255,255,0.1)"
                      borderLeft="none"
                      color="whiteAlpha.600"
                      fontWeight="800"
                      fontSize="xs"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontWeight="900"
                    fontSize="10px"
                    color="whiteAlpha.500"
                    letterSpacing="1px"
                  >
                    AGE
                  </FormLabel>
                  <Input defaultValue="26" {...glassInputStyle} />
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontWeight="900"
                    fontSize="10px"
                    color="whiteAlpha.500"
                    letterSpacing="1px"
                  >
                    GENDER
                  </FormLabel>
                  <Input defaultValue="Male" {...glassInputStyle} />
                </FormControl>
              </SimpleGrid>
            </Box>
          </Box>

          {/* Save Button - Matches Lime Theme */}
          <Button
            leftIcon={<FaSave />}
            bg="#c3e060"
            color="#0f0c29"
            size="lg"
            h="60px"
            rounded="2xl"
            _hover={{
              bg: "#d4ed7d",
              transform: "translateY(-2px)",
              boxShadow: "0 10px 20px rgba(195, 224, 96, 0.3)",
            }}
            isLoading={isSaving}
            loadingText="Saving Changes"
            onClick={handleSave}
            mt={4}
            fontWeight="900"
            textTransform="uppercase"
            letterSpacing="2px"
            fontSize="sm"
          >
            Save Changes
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default EditInfo;
