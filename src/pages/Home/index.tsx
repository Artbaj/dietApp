import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { FaFire, FaBolt, FaTint, FaAppleAlt } from "react-icons/fa";
import NutritionCircle from "@/components/NutritionCircle";
import { MobileMenu } from "@/components/common/Navigation/MobileMenu";

const Main = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const subTextColor = useColorModeValue("gray.500", "gray.400");

  const todaysStats = {
    calories: 1450,
    protein: 110,
    carbs: 180,
    fat: 45,
    goal: 2200,
  };

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")} pb="100px">
      <Container maxW="container.md" pt={8}>
        {/* Header Section */}
        <VStack align="start" spacing={1} mb={6}>
          <Text
            fontSize="sm"
            color={subTextColor}
            fontWeight="bold"
            textTransform="uppercase"
          >
            Saturday, March 21
          </Text>
          <Heading size="lg">Hello, Maciek! 👋</Heading>
        </VStack>

        {/* Main Progress Circle Card */}
        <Box
          bg={cardBg}
          p={6}
          rounded="3xl"
          shadow="sm"
          mb={6}
          textAlign="center"
        >
          <Heading size="sm" mb={4} color={subTextColor}>
            Daily Calorie Goal
          </Heading>
          <NutritionCircle data={todaysStats} />
        </Box>

        {/* Macros Grid */}
        <SimpleGrid columns={2} spacing={4}>
          <MacroCard
            label="Protein"
            value={`${todaysStats.protein}g`}
            icon={FaBolt}
            color="blue.400"
            bg={cardBg}
          />
          <MacroCard
            label="Carbs"
            value={`${todaysStats.carbs}g`}
            icon={FaAppleAlt}
            color="orange.400"
            bg={cardBg}
          />
          <MacroCard
            label="Fat"
            value={`${todaysStats.fat}g`}
            icon={FaFire}
            color="red.400"
            bg={cardBg}
          />
          <MacroCard
            label="Water"
            value="1.8L"
            icon={FaTint}
            color="cyan.400"
            bg={cardBg}
          />
        </SimpleGrid>
      </Container>

      <MobileMenu />
    </Box>
  );
};

// Small reusable component for the macro tiles
const MacroCard = ({ label, value, icon, color, bg }: any) => (
  <HStack p={4} bg={bg} rounded="2xl" shadow="sm" spacing={4}>
    <Icon as={icon} color={color} w={6} h={6} />
    <Stat>
      <StatLabel fontSize="xs" color="gray.500">
        {label}
      </StatLabel>
      <StatNumber fontSize="md">{value}</StatNumber>
    </Stat>
  </HStack>
);

export default Main;
