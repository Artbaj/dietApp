import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  IconButton,
  Container,
  Center,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { FaChevronLeft, FaTimes, FaBolt } from "react-icons/fa";
import { useRouter } from "next/router";
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const ScannerPage = () => {
  const router = useRouter();
  const toast = useToast();
  const [isScanning, setIsScanning] = useState(false);

  // Shared Animated Background
  const animatedBg = {
    background: `
      radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), 
      radial-gradient(ellipse at 70% 60%, #c3e060 0%, rgba(195, 224, 96, 0) 90%), 
      radial-gradient(ellipse at bottom left, #00a3cb 0%, rgba(0, 163, 203, 0) 70%), 
      linear-gradient(to right, #625793 0%, #d55d64 35%, #e49129 65%, #c0671c 100%)
    `,
    backgroundBlendMode: "lighten,saturation,screen,color-dodge,multiply",
  };

  useEffect(() => {
    // 1. Setup the Scanner
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 150 }, // Barcode shaped box
        aspectRatio: 1.0,
        formatsToSupport: [
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.UPC_A,
        ],
      },
      /* verbose= */ false,
    );

    function onScanSuccess(decodedText: string) {
      // 2. Handle the found barcode
      scanner.clear();
      setIsScanning(false);
      toast({
        title: "Product Found",
        description: `Barcode: ${decodedText}`,
        status: "success",
        duration: 3000,
      });
      // You can redirect here: router.push(`/product/${decodedText}`)
    }

    scanner.render(onScanSuccess, (error) => {
      // Keep silent to avoid console spam
    });

    return () => {
      scanner
        .clear()
        .catch((err) => console.error("Failed to clear scanner", err));
    };
  }, []);

  return (
    <Box minH="100vh" position="relative" overflow="hidden" bg="#0f0c29">
      {/* Background Orbs */}
      <MotionBox
        position="fixed"
        inset="-10%"
        zIndex={0}
        filter="blur(60px)"
        opacity={0.4}
        {...animatedBg}
      />

      <Container maxW="container.md" pt={6} position="relative" zIndex={1}>
        {/* Header */}
        <HStack justify="space-between" mb={8}>
          <IconButton
            icon={<FaChevronLeft />}
            aria-label="Back"
            variant="ghost"
            color="white"
            rounded="full"
            onClick={() => router.back()}
          />
          <Heading
            size="md"
            color="white"
            fontWeight="900"
            letterSpacing="-0.5px"
          >
            Scan Product
          </Heading>
          <IconButton
            icon={<FaBolt />}
            aria-label="Flash"
            variant="ghost"
            color="whiteAlpha.600"
            rounded="full"
          />
        </HStack>

        <VStack spacing={6}>
          {/* SCANNER CONTAINER */}
          <Box
            w="full"
            maxW="400px"
            h="400px"
            position="relative"
            borderRadius="32px"
            overflow="hidden"
            bg="black"
          >
            {/* The Library injects video here */}
            <div id="reader" style={{ width: "100%", height: "100%" }}></div>

            {/* Custom UI Overlay over the camera */}
            <Center
              position="absolute"
              inset={0}
              pointerEvents="none"
              flexDir="column"
            >
              {/* Target Frame Brackets */}

              <Text
                mt={6}
                color="whiteAlpha.700"
                fontSize="xs"
                fontWeight="900"
                letterSpacing="2px"
              >
                ALIGN BARCODE WITHIN FRAME
              </Text>
            </Center>
          </Box>

          {/* BOTTOM INSTRUCTION CARD */}
          <Box
            w="full"
            p={6}
            borderRadius="24px"
            bg="rgba(255, 255, 255, 0.08)"
            backdropFilter="blur(20px)"
            border="1px solid rgba(255, 255, 255, 0.15)"
          >
            <VStack spacing={3} align="start">
              <HStack color="#00E5FF">
                <FaBolt />
                <Text fontWeight="900" fontSize="xs" letterSpacing="1px">
                  PRO TIP
                </Text>
              </HStack>
              <Text color="whiteAlpha.800" fontSize="sm" fontWeight="600">
                Hold the phone steady and ensure there is enough light for the
                scanner to detect the barcode.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ScannerPage;
