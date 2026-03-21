import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  VStack,
  Text,
  HStack,
  Square,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
interface NutritionData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  goal: number;
  // Added goal values for macros to make the rings accurate
  proteinGoal?: number;
  carbsGoal?: number;
  fatGoal?: number;
}
import { animate } from "framer-motion";
const NutritionCircle = ({ data }: { data: NutritionData }) => {
  const [proteinVal, setProteinVal] = useState(0);
  const [carbsVal, setCarbsVal] = useState(0);
  const [fatVal, setFatVal] = useState(0);

  useEffect(() => {
    // 2. Define target percentages (based on mock goals)
    const targets = {
      protein: (data.protein / 150) * 100,
      carbs: (data.carbs / 200) * 100,
      fat: (data.fat / 70) * 100,
    };

    // 3. Animate from 0 to target over 1.5 seconds
    const controlsP = animate(0, targets.protein, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setProteinVal(v),
    });
    const controlsC = animate(0, targets.carbs, {
      duration: 1.7, // Slightly different times make it look more organic
      ease: "easeOut",
      onUpdate: (v) => setCarbsVal(v),
    });
    const controlsF = animate(0, targets.fat, {
      duration: 1.9,
      ease: "easeOut",
      onUpdate: (v) => setFatVal(v),
    });

    return () => {
      controlsP.stop();
      controlsC.stop();
      controlsF.stop();
    };
  }, [data]);

  return (
    <VStack spacing={8} p={4} w="full">
      <Box position="relative" w="240px" h="240px">
        <Center position="absolute" inset={0}>
          {/* 1. OUTER RING: Protein (Blue) */}
          <CircularProgress
            value={proteinVal}
            size="240px"
            thickness="6px"
            color="blue.400"
            trackColor="blue.50"
            position="absolute"
            capIsRound
          />

          {/* 2. MIDDLE RING: Carbs (Orange) */}
          <CircularProgress
            value={carbsVal}
            size="205px" // Smaller size to fit inside
            thickness="7px"
            color="orange.400"
            trackColor="orange.50"
            position="absolute"
            capIsRound
          />

          {/* 3. INNER RING: Fat (Yellow) */}
          <CircularProgress
            value={fatVal}
            size="170px" // Smaller size to fit inside
            thickness="8px"
            color="yellow.400"
            trackColor="yellow.50"
            position="absolute"
            capIsRound
          />

          {/* 4. MAIN CIRCLE: Calories (Center Filling) */}
          <VStack spacing={0} zIndex={2}>
            <Text fontSize="4xl" fontWeight="extrabold" lineHeight="1">
              {data.goal - data.calories}
            </Text>
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="gray.500"
              textTransform="uppercase"
            >
              kcal left
            </Text>
          </VStack>
        </Center>
      </Box>

      {/* Bottom Labels */}
      <HStack spacing={6} w="full" justify="center" pt={2}>
        <MacroItem
          label="Protein"
          value={data.protein}
          color="blue.400"
          progress={proteinVal}
        />
        <MacroItem
          label="Carbs"
          value={data.carbs}
          color="orange.400"
          progress={carbsVal}
        />
        <MacroItem
          label="Fat"
          value={data.fat}
          color="yellow.400"
          progress={fatVal}
        />
      </HStack>
    </VStack>
  );
};

const MacroItem = ({ label, value, color, progress }: any) => (
  <VStack spacing={1} align="center">
    <HStack spacing={2}>
      <Square size="10px" bg={color} rounded="full" />
      <Text fontSize="xs" fontWeight="bold" color="gray.600">
        {label}
      </Text>
    </HStack>
    <Text fontSize="md" fontWeight="bold">
      {value}g
    </Text>
  </VStack>
);

export default NutritionCircle;
