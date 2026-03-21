import React from "react";
import {
  Box,
  VStack,
  Text,
  Heading,
  Icon,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaUtensils,
  FaFire,
} from "react-icons/fa";

interface SwipeCardProps {
  item: {
    name: string;
    cal: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  onSwipe: (direction: "left" | "right") => void;
}

const SwipeCard = ({ item, onSwipe }: SwipeCardProps) => {
  const x = useMotionValue(0);

  // Dynamic styles based on drag position
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  // Color transitions: Red for Left, Gray for Center, Green for Right
  const cardBg = useTransform(
    x,
    [-100, 0, 100],
    ["#FFF5F5", "#FFFFFF", "#F0FFF4"],
  );
  const iconColor = useTransform(
    x,
    [-100, 0, 100],
    ["#E53E3E", "#CBD5E0", "#38A169"],
  );

  return (
    <motion.div
      style={{ x, rotate, opacity, cursor: "grab" }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 100) onSwipe("right");
        else if (info.offset.x < -100) onSwipe("left");
      }}
      whileTap={{ scale: 1.05 }}
    >
      <Box
        as={motion.div}
        style={{ backgroundColor: cardBg }}
        p={8}
        rounded="3xl"
        textAlign="center"
        color="gray.800"
        w="320px"
        shadow="2xl"
        border="1px solid"
        borderColor="gray.100"
        position="relative"
      >
        {/* Animated Icon Indicator */}
        <motion.div style={{ color: iconColor }}>
          <Icon
            as={
              x.get() > 50
                ? FaCheckCircle
                : x.get() < -50
                  ? FaTimesCircle
                  : FaUtensils
            }
            w={16}
            h={16}
            mb={4}
          />
        </motion.div>

        <VStack spacing={2}>
          <Badge colorScheme="green" variant="subtle" rounded="full" px={3}>
            Food Found
          </Badge>
          <Heading size="lg" fontWeight="extrabold">
            {item.name}
          </Heading>

          <HStack color="brand.500" spacing={1} justify="center">
            <Icon as={FaFire} />
            <Text fontSize="2xl" fontWeight="bold">
              {item.cal} kcal
            </Text>
          </HStack>
        </VStack>

        <Box mt={6} pt={6} borderTop="1px solid" borderColor="gray.50">
          <Text
            fontSize="xs"
            fontWeight="bold"
            color="gray.400"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Swipe Right to Log • Left to Cancel
          </Text>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SwipeCard;
