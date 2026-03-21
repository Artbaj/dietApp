import React, { useState } from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  useToast,
  IconButton,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
// @ts-ignore
import { QrReader } from "react-qr-reader";
import {
  FaTimes,
  FaBolt,
  FaBarcode,
  FaAppleAlt,
  FaPizzaSlice,
  FaCookie,
} from "react-icons/fa";
import { useRouter } from "next/router";
import SwipeCard from "@/components/SwipeCard";
import { MobileMenu } from "@/components/common/Navigation/MobileMenu";

const ScanPage = () => {
  const [scannedItem, setScannedItem] = useState<any>(null);
  const toast = useToast();
  const router = useRouter();

  // 1. Mock Database for the showcase
  const mockItems = [
    {
      name: "Red Apple",
      cal: 95,
      protein: 0.5,
      carbs: 25,
      fat: 0.3,
      icon: FaAppleAlt,
      color: "red.400",
    },
    {
      name: "Cheese Pizza",
      cal: 285,
      protein: 12,
      carbs: 36,
      fat: 10,
      icon: FaPizzaSlice,
      color: "orange.400",
    },
    {
      name: "Choco Cookie",
      cal: 160,
      protein: 2,
      carbs: 22,
      fat: 7,
      icon: FaCookie,
      color: "yellow.700",
    },
  ];

  const handleScan = (result: any) => {
    if (result && !scannedItem) {
      // Pick a random item from our mock list
      const randomItem =
        mockItems[Math.floor(Math.random() * mockItems.length)];
      setScannedItem(randomItem);
    }
  };

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right" && scannedItem) {
      toast({
        title: "Logged!",
        description: `Added ${scannedItem.name} to your diary.`,
        status: "success",
        duration: 2000,
        position: "top",
      });
    }
    setScannedItem(null);
  };

  return (
    <Box h="100vh" bg="black" position="relative" overflow="hidden">
      {/* Header */}
      <HStack
        position="absolute"
        top={6}
        w="full"
        px={6}
        zIndex={10}
        justify="space-between"
      >
        <IconButton
          aria-label="Close"
          icon={<FaTimes />}
          rounded="full"
          bg="whiteAlpha.300"
          color="white"
          onClick={() => router.push("/Home")}
        />
        <Badge bg="brand.500" color="white" px={3} py={1} rounded="full">
          Barcode Mode
        </Badge>
        <IconButton
          aria-label="Flash"
          icon={<FaBolt />}
          rounded="full"
          bg="whiteAlpha.300"
          color="white"
        />
      </HStack>

      <Center h="full">
        {!scannedItem ? (
          <Box w="100%" h="100%" position="relative">
            <QrReader
              onResult={handleScan}
              scanDelay={500}
              constraints={{ facingMode: "environment" }}
              // 1. Container fills the whole screen
              containerStyle={{
                width: "100%",
                height: "100%",
              }}
              // 2. Video element acts like a background-image: cover
              videoStyle={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Viewfinder Overlay stays centered */}
            <VStack
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              zIndex={2}
              pointerEvents="none"
            >
              <Box
                w="280px"
                h="180px"
                border="2px solid"
                borderColor="brand.500"
                borderRadius="20px"
                boxShadow="0 0 0 9999px rgba(0, 0, 0, 0.6)"
                position="relative"
              >
                {/* Scanning Animation Line */}
                <Box
                  position="absolute"
                  w="full"
                  h="2px"
                  bg="brand.500"
                  shadow="0 0 15px #38A169"
                  animation="scan 2s infinite linear"
                />
              </Box>
              <Text color="white" fontWeight="bold">
                Align Barcode Here
              </Text>
            </VStack>

            {/* Showcase Trigger Button (Hidden at bottom) */}
            <Box position="absolute" bottom="120px" w="full" textAlign="center">
              <IconButton
                aria-label="Simulate"
                icon={<FaBarcode />}
                size="lg"
                colorScheme="brand"
                rounded="full"
                onClick={() => handleScan(true)}
              />
              <Text color="whiteAlpha.600" fontSize="xs" mt={2}>
                Tap to Simulate Scan
              </Text>
            </Box>
          </Box>
        ) : (
          <Box zIndex={20}>
            <SwipeCard item={scannedItem} onSwipe={handleSwipe} />
          </Box>
        )}
      </Center>

      <style jsx global>{`
        @keyframes scan {
          0% {
            top: 0%;
          }
          50% {
            top: 100%;
          }
          100% {
            top: 0%;
          }
        }
      `}</style>

      <MobileMenu />
    </Box>
  );
};

export default ScanPage;
