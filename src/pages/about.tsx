import { Navigation } from '../components/common/Navigation/Navigation';
import { useAlert } from "@/context/AlertContext";
import {
  useColorMode,
  Button
} from '@chakra-ui/react';
import React from 'react';

const AboutPage = () => {
  const { showAlert, hideAlert } = useAlert();
  const { colorMode, toggleColorMode } = useColorMode()

  const handleError = () => {
    showAlert('error', 'This is an error message');
    setTimeout(() => {
      hideAlert();
    }, 5000); // Hide the alert after 5 seconds
  };

  const handleSuccess = () => {
    showAlert('success', 'This is a success message');
    setTimeout(() => {
      hideAlert();
    }, 5000); // Hide the alert after 5 seconds
  }

  return (
      <>
      <Navigation />
      <Button onClick={handleError}>Show Error</Button>
      <Button onClick={handleSuccess}>Show Success</Button>
      <Button onClick={toggleColorMode}>toggle color mode</Button>
      <p>testing text placement</p>
      </>
  );
};

export default AboutPage;
