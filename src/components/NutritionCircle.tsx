import {
  Box,
  CircularProgress,
  VStack,
  Text,
  HStack,
  Square,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";

interface stats {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface goals {
  calorieGoal: number;
  proteinGoal: number;
  fatGoal: number;
  carbGoal: number;
}

interface Props {
  stats: stats;
  goals: goals;
}

const NutritionCircle = ({ stats, goals }: Props) => {
  const [proteinVal, setProteinVal] = useState(0);
  const [carbsVal, setCarbsVal] = useState(0);
  const [fatVal, setFatVal] = useState(0);

  const proteinProgress = (stats.protein / goals.proteinGoal) * 100;
  const carbProgress = (stats.carbs / goals.carbGoal) * 100;
  const fatProgress = (stats.fat / goals.fatGoal) * 100;
  const caloriesLeft = goals.calorieGoal - stats.calories;

  useEffect(() => {
    const controlsP = animate(0, proteinProgress, {
      duration: 1.2,
      onUpdate: (v) => setProteinVal(v),
    });
    const controlsC = animate(0, carbProgress, {
      duration: 1.4,
      onUpdate: (v) => setCarbsVal(v),
    });
    const controlsF = animate(0, fatProgress, {
      duration: 1.6,
      onUpdate: (v) => setFatVal(v),
    });
    return () => {
      controlsP.stop();
      controlsC.stop();
      controlsF.stop();
    };
  }, [stats, goals, proteinProgress, carbProgress, fatProgress]);

  return (
    <VStack spacing={8} py={4} w="full">
      <Box position="relative" w="240px" h="240px">
        {/* SVG GRADIENT DEFINITIONS */}
        <svg style={{ height: 0, width: 0, position: "absolute" }}>
          <defs>
            <linearGradient id="proteinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#122e77" />
            </linearGradient>
            <linearGradient id="carbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF9100" />
              <stop offset="100%" stopColor="#d55d64" />
            </linearGradient>
            <linearGradient id="fatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F50057" />
              <stop offset="100%" stopColor="#625793" />
            </linearGradient>
          </defs>
        </svg>

        <Center position="absolute" inset={0}>
          {/* PROTEIN (OUTER) */}
          <CircularProgress
            value={proteinVal}
            size="240px"
            thickness="8px"
            trackColor="rgba(255,255,255,0.05)"
            position="absolute"
            capIsRound
            sx={{
              "& .chakra-progress__indicator": { stroke: "url(#proteinGrad)" },
            }}
          />

          {/* CARBS (MIDDLE) */}
          <CircularProgress
            value={carbsVal}
            size="200px"
            thickness="10px"
            trackColor="rgba(255,255,255,0.05)"
            position="absolute"
            capIsRound
            sx={{
              "& .chakra-progress__indicator": { stroke: "url(#carbGrad)" },
            }}
          />

          {/* FAT (INNER) */}
          <CircularProgress
            value={fatVal}
            size="160px"
            thickness="14px"
            trackColor="rgba(255,255,255,0.05)"
            position="absolute"
            capIsRound
            sx={{
              "& .chakra-progress__indicator": { stroke: "url(#fatGrad)" },
            }}
          />

          <VStack spacing={0} zIndex={2}>
            <Text fontSize="4xl" fontWeight="900" color="white" lineHeight="1">
              {caloriesLeft > 0 ? caloriesLeft : 0}
            </Text>
            <Text
              fontSize="xs"
              fontWeight="black"
              color="whiteAlpha.700"
              textTransform="uppercase"
              letterSpacing="widest"
            >
              kcal left
            </Text>
          </VStack>
        </Center>
      </Box>

      <HStack spacing={8} w="full" justify="center">
        <MacroItem label="Protein" value={stats.protein} color="#00E5FF" />
        <MacroItem label="Carbs" value={stats.carbs} color="#FF9100" />
        <MacroItem label="Fat" value={stats.fat} color="#F50057" />
      </HStack>
    </VStack>
  );
};

const MacroItem = ({ label, value, color }: any) => (
  <VStack spacing={1}>
    <HStack spacing={2}>
      <Square
        size="10px"
        bg={color}
        rounded="full"
        border="1.5px solid white"
      />
      <Text
        fontSize="xs"
        fontWeight="black"
        color="whiteAlpha.600"
        textTransform="uppercase"
      >
        {label}
      </Text>
    </HStack>
    <Text fontSize="md" fontWeight="bold" color="white">
      {value}g
    </Text>
  </VStack>
);

export default NutritionCircle;
