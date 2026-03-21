import { Flex, Text, useColorModeValue, Box, SimpleGrid } from '@chakra-ui/react'
import { NAV_ITEMS } from '@/constants/navItems';
import { useRouter } from 'next/router';

export const BottomNav = () => {
    const router = useRouter();
    const bgColor = useColorModeValue('white', 'gray.800');
    const hoverBgColor = useColorModeValue('gray.100', 'gray.700');
    const activeBgColor = useColorModeValue('gray.200', 'gray.600');
    const textColor = useColorModeValue('black', 'white');
    return (
        <Box 
            display={{ base: 'block', md: 'none' }}
            position="fixed"
            bottom="0"
            width="100%"
            zIndex="100"
            borderTop="1px"
            borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
            <SimpleGrid
                columns={NAV_ITEMS.length}
                bg={bgColor}
                justifyContent="space-between"
                alignItems="center"
            >
                {NAV_ITEMS.map((navItem, index) => (
                    <Flex as={'button'}
                        key={navItem.label} 
                        direction="column" 
                        align="center" 
                        justify="center"
                        flex={1}
                        color={textColor}
                        borderRight={index < NAV_ITEMS.length - 1 ? '1px' : '0'}
                        borderColor={'gray.200'}
                        p={2}
                        onClick={() => router.push(navItem.href ?? '#')}
                        _hover={{ bg: hoverBgColor, textDecoration: 'none' }}
                        _active={{ bg: activeBgColor, shadow: 'inner'}}
                    >
                        {navItem.icon}
                        <Text fontWeight={600} fontSize={'xs'} textAlign="center">
                            {navItem.label}
                        </Text>
                    </Flex>
                ))}
            </SimpleGrid>
        </Box>
    );
};
