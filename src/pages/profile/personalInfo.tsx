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
  useColorModeValue,
  Container,
  SimpleGrid,
  InputGroup,
  InputRightAddon,
  useToast,
} from "@chakra-ui/react";
import {
  FaChevronLeft,
  FaSave,
  FaUser,
  FaWeight,
  FaRulerVertical,
  FaBirthdayCake,
} from "react-icons/fa";
import { useRouter } from "next/router";

const EditInfo = () => {
  const router = useRouter();
  const toast = useToast();
  const [isSaving, setIsSaving] = useState(false);
  const cardBg = useColorModeValue("white", "gray.700");

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
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
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")} pb={10}>
      <Container maxW="container.md" pt={6}>
        {/* Top Navigation */}
        <HStack mb={8} spacing={4}>
          <IconButton
            aria-label="Back"
            icon={<FaChevronLeft />}
            variant="ghost"
            rounded="full"
            onClick={() => router.back()}
          />
          <Heading size="md">Personal Information</Heading>
        </HStack>

        <VStack spacing={6} align="stretch">
          {/* Section: Basic Info */}
          <Box bg={cardBg} p={6} rounded="2xl" shadow="sm">
            <VStack spacing={4}>
              <FormControl>
                <FormLabel fontWeight="bold" fontSize="xs" color="gray.500">
                  FULL NAME
                </FormLabel>
                <InputGroup>
                  <Input
                    defaultValue="Maciek"
                    variant="filled"
                    focusBorderColor="brand.500"
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold" fontSize="xs" color="gray.500">
                  EMAIL ADDRESS
                </FormLabel>
                <Input
                  defaultValue="maciek@example.com"
                  variant="filled"
                  focusBorderColor="brand.500"
                />
              </FormControl>
            </VStack>
          </Box>

          {/* Section: Physical Stats */}
          <Text fontWeight="bold" fontSize="sm" color="brand.500" ml={2}>
            PHYSICAL STATS
          </Text>
          <Box bg={cardBg} p={6} rounded="2xl" shadow="sm">
            <SimpleGrid columns={2} spacing={4}>
              <FormControl>
                <FormLabel fontWeight="bold" fontSize="xs" color="gray.500">
                  WEIGHT
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    defaultValue="82"
                    variant="filled"
                    focusBorderColor="brand.500"
                  />
                  <InputRightAddon children="kg" />
                </InputGroup>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold" fontSize="xs" color="gray.500">
                  HEIGHT
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    defaultValue="185"
                    variant="filled"
                    focusBorderColor="brand.500"
                  />
                  <InputRightAddon children="cm" />
                </InputGroup>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold" fontSize="xs" color="gray.500">
                  AGE
                </FormLabel>
                <Input
                  defaultValue="26"
                  variant="filled"
                  focusBorderColor="brand.500"
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold" fontSize="xs" color="gray.500">
                  GENDER
                </FormLabel>
                <Input
                  defaultValue="Male"
                  variant="filled"
                  focusBorderColor="brand.500"
                />
              </FormControl>
            </SimpleGrid>
          </Box>

          {/* Save Button */}
          <Button
            leftIcon={<FaSave />}
            colorScheme="brand"
            size="lg"
            h="60px"
            rounded="2xl"
            shadow="lg"
            isLoading={isSaving}
            loadingText="Saving Changes"
            onClick={handleSave}
            mt={4}
          >
            Save Changes
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default EditInfo;
