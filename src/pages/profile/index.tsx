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
  useColorModeValue,
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

const ProfilePage = () => {
  const router = useRouter();
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")} pb="100px">
      <Container maxW="container.md" pt={10}>
        {/* Profile Header */}
        <VStack spacing={4} mb={8}>
          <Box position="relative">
            <Avatar
              size="2xl"
              name="Maciek"
              src="https://bit.ly/broken-link" // Replace with real image later
              border="4px solid"
              borderColor="brand.500"
            />
            <Center
              position="absolute"
              bottom="0"
              right="0"
              bg="brand.500"
              borderRadius="full"
              p={2}
              border="3px solid white"
            >
              <Icon as={FaAward} color="white" />
            </Center>
          </Box>
          <VStack spacing={0}>
            <Heading size="lg">Maciek</Heading>
            <Text color={textColor}>Premium Member since 2024</Text>
          </VStack>
          <Button
            colorScheme="brand"
            variant="outline"
            size="sm"
            rounded="full"
            px={8}
          >
            Edit Profile
          </Button>
        </VStack>

        {/* Settings Groups */}
        <VStack spacing={4} align="stretch">
          <Text fontWeight="bold" fontSize="sm" color="brand.500" ml={2}>
            ACCOUNT
          </Text>
          <Box bg={cardBg} rounded="2xl" shadow="sm" overflow="hidden">
            <Link href={"/profile/personalInfo"}>
              <SettingItem icon={FaUserCog} label="Personal Information" />
            </Link>

            <Divider ml={14} />
            <SettingItem icon={FaLock} label="Privacy & Security" />
            <Divider ml={14} />
            <HStack px={4} py={4} spacing={4}>
              <Icon as={FaBell} color="brand.500" w={5} h={5} />
              <Text fontWeight="medium">Push Notifications</Text>
              <Spacer />
              <Switch colorScheme="brand" defaultChecked />
            </HStack>
          </Box>

          <Text fontWeight="bold" fontSize="sm" color="brand.500" ml={2} mt={4}>
            SUPPORT
          </Text>
          <Box bg={cardBg} rounded="2xl" shadow="sm" overflow="hidden">
            <SettingItem icon={FaQuestionCircle} label="Help Center" />
            <Divider ml={14} />
            <HStack
              px={4}
              py={4}
              spacing={4}
              cursor="pointer"
              _hover={{ bg: "red.50" }}
              onClick={() => router.push("/")}
            >
              <Icon as={FaSignOutAlt} color="red.400" w={5} h={5} />
              <Text fontWeight="medium" color="red.400">
                Logout
              </Text>
              <Spacer />
              <Icon as={FaChevronRight} color="gray.300" />
            </HStack>
          </Box>
        </VStack>
      </Container>

      <MobileMenu />
    </Box>
  );
};

// Reusable Setting Row Component
const SettingItem = ({ icon, label }: { icon: any; label: string }) => (
  <HStack
    px={4}
    py={4}
    spacing={4}
    cursor="pointer"
    _hover={{ bg: "blackAlpha.50" }}
  >
    <Icon as={icon} color="brand.500" w={5} h={5} />
    <Text fontWeight="medium">{label}</Text>
    <Spacer />
    <Icon as={FaChevronRight} color="gray.300" w={3} h={3} />
  </HStack>
);

const Center = ({ children, ...props }: any) => (
  <Box display="flex" justifyContent="center" alignItems="center" {...props}>
    {children}
  </Box>
);

export default ProfilePage;
