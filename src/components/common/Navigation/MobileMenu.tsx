import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Flex,
  IconButton,
  Icon,
  useColorModeValue,
  Box,
  background,
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
  const activeGlassStyle = {
    bg: "rgba(255, 255, 255, 0.15)", // Slightly more opaque than the bar
    backdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", // Subtle deep glow
  };
  return (
    <Flex
      position="fixed" // Changed to fixed to ensure it stays at bottom of screen
      bottom={6} // Lifted slightly off the bottom for a "floating" look
      left={4}
      right={4}
      height="70px"
      bg="rgba(255, 255, 255, 0.08)"
      backdropFilter="blur(16px) saturate(120%)"
      border="1px solid rgba(255, 255, 255, 0.15)"
      color="white"
      justify="space-around"
      align="center"
      borderRadius="30px" // Fully rounded floating bar
      zIndex={100}
      transition="all 0.3s ease"
    >
      {navItems.map((item) => {
        const isActive = router.pathname === item.path;

        return (
          <Link
            key={item.path}
            href={item.path}
            style={{ textDecoration: "none" }}
          >
            <IconButton
              aria-label={item.label}
              icon={
                <Icon
                  as={item.icon}
                  w={isActive ? 7 : 5}
                  h={isActive ? 7 : 5}
                />
              }
              // Apply Glass styling only when active
              {...(isActive ? activeGlassStyle : { bg: "transparent" })}
              color={isActive ? "white" : "whiteAlpha.600"}
              rounded="full"
              size="lg"
              // Lift the active item

              transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              _hover={{
                bg: "rgba(255, 255, 255, 0.1)",
                transform: isActive ? "translateY(-28px)" : "scale(1.1)",
              }}
              _active={{ bg: "rgba(255, 255, 255, 0.2)" }}
            />
          </Link>
        );
      })}
    </Flex>
  );
};
