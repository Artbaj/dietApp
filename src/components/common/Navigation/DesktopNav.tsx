import { ChevronRightIcon } from '@chakra-ui/icons'
import { 
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react'
import { NAV_ITEMS, NavItem } from '@/constants/navItems'
import { FaMoon, FaSun } from 'react-icons/fa'

export const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
    const {toggleColorMode} = useColorMode();
  
    return (
      <Box mb={10}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          maxH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
  
          <Flex
            flex={{ base: 1 }}
            justify={{ base: 'center', md: 'start' }}
          >
              <Link href={process.env.NEXT_PUBLIC_ROOT_URL || 'http://localhost:3000'} >
                  <Image src={'/logo.webp'} alt='logo' height={50} width={50} loading='lazy'/>
              </Link>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} alignItems={'center'}>
            <Stack direction={'row'} spacing={4} >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={!navItem.active ? linkColor : 'black'}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Box>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <IconButton onClick={toggleColorMode} aria-label='color mode toggle' icon={useColorModeValue(<FaSun />, <FaMoon />)}/>
            <Avatar />
          </Stack>
        </Flex>
      </Box>
    )
  }
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Box
        as="a"
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('gray.100', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'black' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'gray.900'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    )
  }