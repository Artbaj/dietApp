import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Avatar,
  Icon,
  Button,
  Divider,
  Switch,
  Container,
  Spacer,
} from "@chakra-ui/react";
import {
  FaUserCog,
  FaBell,
  FaLock,
  FaQuestionCircle,
  FaSignOutAlt,
  FaChevronRight,
  FaAward,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { MobileMenu } from "@/components/common/Navigation/MobileMenu";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProfilePage = () => {
  const router = useRouter();

  // Unified Glass Style (Updated for deeper blur)
  const glassVariant = {
    bg: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
    borderRadius: "24px",
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
      {/* --- SHARED ANIMATED BACKGROUND --- */}
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
          x: [-20, 20, -20],
          y: [-20, 30, -20],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
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
        {/* Profile Header */}
        <VStack spacing={5} mb={10}>
          <Box position="relative">
            <Avatar
              size="2xl"
              name="Maciek"
              src="" // Add your image URL here
              border="4px solid"
              borderColor="whiteAlpha.300"
              boxShadow="0 0 30px rgba(195, 224, 96, 0.3)" // Lime glow
            />
            <Box
              position="absolute"
              bottom="2"
              right="2"
              bg="#c3e060" // Signature Lime
              borderRadius="full"
              p={2}
              border="2px solid #0f0c29"
              boxShadow="0 0 15px rgba(195, 224, 96, 0.6)"
            >
              <Icon as={FaAward} color="#0f0c29" w={4} h={4} />
            </Box>
          </Box>

          <VStack spacing={1}>
            <Heading
              size="xl"
              color="white"
              fontWeight="900"
              letterSpacing="-1px"
            >
              Maciek
            </Heading>
            <Text
              color="whiteAlpha.600"
              fontWeight="800"
              fontSize="10px"
              textTransform="uppercase"
              letterSpacing="3px"
            >
              Premium Member since 2024
            </Text>
          </VStack>

          <Link href="/profile/personalInfo">
            <Button
              bg="whiteAlpha.100"
              backdropFilter="blur(10px)"
              border="1px solid whiteAlpha.300"
              color="white"
              _hover={{ bg: "whiteAlpha.200", transform: "scale(1.05)" }}
              size="sm"
              rounded="full"
              px={8}
              fontSize="10px"
              fontWeight="900"
              letterSpacing="1px"
            >
              EDIT PROFILE
            </Button>
          </Link>
        </VStack>

        {/* Settings Groups */}
        <VStack spacing={6} align="stretch">
          <Box>
            <Text
              fontWeight="900"
              fontSize="10px"
              color="#00E5FF"
              ml={4}
              mb={3}
              letterSpacing="3px"
            >
              ACCOUNT
            </Text>
            <VStack
              {...glassVariant}
              spacing={0}
              align="stretch"
              overflow="hidden"
            >
              <Link href={"/profile/personalInfo"}>
                <SettingItem
                  icon={FaUserCog}
                  label="Personal Information"
                  color="#00E5FF"
                />
              </Link>
              <Divider borderColor="whiteAlpha.100" />
              <SettingItem
                icon={FaLock}
                label="Privacy & Security"
                color="#F50057"
              />
              <Divider borderColor="whiteAlpha.100" />
              <HStack px={6} py={5} spacing={4}>
                <Icon
                  as={FaBell}
                  color="#FF9100"
                  w={5}
                  h={5}
                  filter="drop-shadow(0 0 8px rgba(255, 145, 0, 0.4))"
                />
                <Text fontWeight="700" color="white">
                  Push Notifications
                </Text>
                <Spacer />
                <Switch colorScheme="cyan" size="md" />
              </HStack>
            </VStack>
          </Box>

          <Box>
            <Text
              fontWeight="900"
              fontSize="10px"
              color="#c3e060"
              ml={4}
              mb={3}
              letterSpacing="3px"
            >
              SUPPORT
            </Text>
            <VStack
              {...glassVariant}
              spacing={0}
              align="stretch"
              overflow="hidden"
            >
              <SettingItem
                icon={FaQuestionCircle}
                label="Help Center"
                color="#c3e060"
              />
              <Divider borderColor="whiteAlpha.100" />
              <HStack
                px={6}
                py={5}
                spacing={4}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{ bg: "whiteAlpha.100" }}
                onClick={() => router.push("/")}
              >
                <Icon as={FaSignOutAlt} color="whiteAlpha.400" w={5} h={5} />
                <Text fontWeight="800" color="whiteAlpha.600" fontSize="sm">
                  LOGOUT
                </Text>
                <Spacer />
                <Icon as={FaChevronRight} color="whiteAlpha.300" w={3} h={3} />
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>

      <MobileMenu />
    </Box>
  );
};

// Reusable Setting Row Component
const SettingItem = ({
  icon,
  label,
  color,
}: {
  icon: any;
  label: string;
  color: string;
}) => (
  <HStack
    px={6}
    py={5}
    spacing={4}
    cursor="pointer"
    transition="all 0.3s"
    _hover={{ bg: "whiteAlpha.100", pl: 8 }}
  >
    <Icon
      as={icon}
      color={color}
      w={5}
      h={5}
      filter={`drop-shadow(0 0 10px ${color}44)`}
    />
    <Text fontWeight="700" color="white">
      {label}
    </Text>
    <Spacer />
    <Icon as={FaChevronRight} color="whiteAlpha.400" w={3} h={3} />
  </HStack>
);

export default ProfilePage;
