import React from 'react';
import { Navigation } from '../components/common/Navigation/Navigation';
import { Center, Flex, Heading, Button, Link, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { NAV_ITEMS } from '@/constants/navItems';

const App = () => {
const GITHUB_LINK = NAV_ITEMS[1]?.children?.[3]?.href;
  return (
    <>
      <Navigation />
      <Center flexDir={'column'}>
        <Heading>Chakrastic PWA Template</Heading>
        <Text>
          A template for creating a PWA with NextJS and Chakra UI.
        </Text>
        <Flex flexDir={'row'}>
          <Link isExternal href={GITHUB_LINK}>
          <Button aria-label="github" leftIcon={<FaGithub />}> Github</Button>
          </Link>
        </Flex>
      </Center>
    </>
  );
};

export default App;
