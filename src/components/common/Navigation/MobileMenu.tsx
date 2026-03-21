import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Flex,
  IconButton,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { FaHome, FaQrcode, FaHistory, FaUserCircle } from "react-icons/fa";

export const MobileMenu = () => {
  const router = useRouter();
  const bg = useColorModeValue("white", "gray.800");
  const activeBg = "brand.500";
  const inactiveColor = useColorModeValue("gray.400", "gray.500");

  const navItems = [
    { label: "Home", icon: FaHome, path: "/Home" },
    { label: "History", icon: FaHistory, path: "/history" },
    { label: "Scan", icon: FaQrcode, path: "/Scanner" },
    { label: "Logs", icon: FaHistory, path: "/logs" },
    { label: "Profile", icon: FaUserCircle, path: "/profile" },
  ];

  return (
    <Flex
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      height="70px"
      bg={bg}
      borderTop="1px solid"
      borderColor={useColorModeValue("gray.100", "gray.700")}
      justify="space-around"
      align="center"
      px={4}
      zIndex={10}
      pb={4}
    >
      {navItems.map((item) => {
        const isActive = router.pathname === item.path;

        return (
          <Link key={item.path} href={item.path}>
            <IconButton
              /* REMOVE as="a" here */
              aria-label={item.label}
              icon={<Icon as={item.icon} w={6} h={6} />}
              bg={isActive ? activeBg : "transparent"}
              color={isActive ? "white" : inactiveColor}
              rounded="full"
              size={isActive ? "lg" : "md"}
              mt={isActive ? "-40px" : "0"}
              shadow={isActive ? "xl" : "none"}
              transition="all 0.2s cubic-bezier(.17,.67,.83,.67)"
              _hover={{
                bg: isActive ? activeBg : "gray.100",
              }}
            />
          </Link>
        );
      })}
    </Flex>
  );
};
