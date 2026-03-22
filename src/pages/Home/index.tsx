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
  Container,
} from "@chakra-ui/react";
import { FaFire, FaBolt, FaTint, FaAppleAlt } from "react-icons/fa";
import NutritionCircle from "@/components/NutritionCircle";
import { MobileMenu } from "@/components/common/Navigation/MobileMenu";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

// 1. This is your local "Variant"
const glassVariant = {
  bg: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(16px) saturate(180%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%)", // Safari Support
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "24px",
  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
};

const Main = () => {
  const today = new Date();
  const displayDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(today);
  const person = {
    name: "Franek",
    bmi: 22.5,
    calorieGoal: 2200,
    proteinGoal: 150,
    carbGoal: 250,
    fatGoal: 70,
  };
  const todaysStats = {
    calories: 1450,
    protein: 110,
    carbs: 180,
    fat: 45,
  };

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
        opacity={0.6}
        {...animatedBg}
        animate={{
          x: [-20, 20, -20],
          y: [-20, 30, -20],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <Container
        maxW="container.md"
        pt={12}
        pb="120px"
        position="relative"
        zIndex={1}
      >
        <VStack align="start" spacing={1} mb={10}>
          <Text
            fontSize="xs"
            color="whiteAlpha.500"
            fontWeight="800"
            letterSpacing="3px"
            textTransform="uppercase"
          >
            {displayDate}
          </Text>
          <Heading
            size="xl"
            color="white"
            fontWeight="300"
            letterSpacing="-1px"
          >
            Hello,{" "}
            <Text as="span" fontWeight="800">
              {person.name}
            </Text>{" "}
            👋
          </Heading>
        </VStack>

        <MotionBox
          {...glassVariant} // SPREAD THE STYLE OBJECT
          p={3}
          mb={8}
          textAlign="center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Text
            fontSize="10px"
            fontWeight="800"
            mb={8}
            color="whiteAlpha.600"
            textTransform="uppercase"
            letterSpacing="3px"
          >
            DAILY CALORIE PROGRESS
          </Text>
          <Box py={4}>
            <NutritionCircle
              stats={todaysStats}
              goals={{
                calorieGoal: person.calorieGoal,
                proteinGoal: person.proteinGoal,
                fatGoal: person.fatGoal,
                carbGoal: person.carbGoal,
              }}
            />
          </Box>
        </MotionBox>

        <SimpleGrid columns={2} spacing={4}>
          <MacroCard
            label="Protein"
            value={`${todaysStats.protein}g`}
            icon={FaBolt}
            color="#00E5FF" // Matches Protein Ring (Starting Cyan)
          />
          <MacroCard
            label="Carbs"
            value={`${todaysStats.carbs}g`}
            icon={FaAppleAlt}
            color="#FF9100" // Matches Carbs Ring (Starting Orange)
          />
          <MacroCard
            label="Fat"
            value={`${todaysStats.fat}g`}
            icon={FaFire}
            color="#F50057" // Matches Fat Ring (Starting Pink)
          />
          <MacroCard
            label="Water"
            value="1.8L"
            icon={FaTint}
            color="#c3e060" // Matches the signature Lime Green of your background
          />
        </SimpleGrid>
      </Container>
      <MobileMenu />
    </Box>
  );
};

const MacroCard = ({ label, value, icon, color }: any) => (
  <MotionBox
    {...glassVariant} // SPREAD THE STYLE OBJECT HERE TOO
    p={5}
    display="flex"
    alignItems="center"
    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.12)" }}
    transition={{ duration: 0.2 }}
  >
    <HStack spacing={4}>
      <Icon
        as={icon}
        color={color}
        w={5}
        h={5}
        filter={`drop-shadow(0 0 10px ${color}44)`}
      />
      <Stat>
        <StatLabel
          fontSize="10px"
          fontWeight="800"
          color="whiteAlpha.500"
          textTransform="uppercase"
          letterSpacing="1px"
        >
          {label}
        </StatLabel>
        <StatNumber fontSize="md" color="white" fontWeight="700">
          {value}
        </StatNumber>
      </Stat>
    </HStack>
  </MotionBox>
);

export default Main;
