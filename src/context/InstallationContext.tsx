// InstallContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import  useDeviceDetect from '@/utils/useDeviceDetect';
declare global {
    interface WindowEventMap {
      beforeinstallprompt: BeforeInstallPromptEvent;
    }
  }
  
  interface BeforeInstallPromptEvent extends Event {
    prompt: () => void;
    userChoice: Promise<{
      outcome: 'accepted' | 'dismissed',
      platform: string
    }>;
  }
  
  let deferredPrompt: BeforeInstallPromptEvent | null = null;
interface InstallContextType {
  isModalOpen: boolean;
  installDenied: boolean;
  closeModal: () => void;
  handleInstallClick: (deferredPrompt: BeforeInstallPromptEvent | null) => void;
}

const InstallContext = createContext<InstallContextType | undefined>(undefined);

export const useInstallContext = (): InstallContextType => {
  const context = useContext(InstallContext);
  if (!context) {
    throw new Error('useInstallContext must be used within an InstallProvider');
  }
  return context;
};
type InstallProviderProps = {
    children: React.ReactNode;
  };

export const InstallProvider: React.FC<InstallProviderProps> = ({ children }) => {
  const { isIOSDevice } = useDeviceDetect();
  const [isModalOpen, setModalOpen] = useState(true);
  const [installDenied, setInstallDenied] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
    };
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInstallClick = (prompt: BeforeInstallPromptEvent | null) => {
    if (prompt) {
      prompt.prompt();
      prompt.userChoice.then((choiceResult) => {
        console.log('User accepted the install prompt');
        setInstallDenied(false);
        setModalOpen(false);
      });
    }
  };

  const value: InstallContextType = {
    isModalOpen,
    installDenied,
    closeModal,
    handleInstallClick,
  };

  return (
    <InstallContext.Provider value={value}>
      {isModalOpen && !installDenied && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Install App</ModalHeader>
            <ModalCloseButton onClick={closeModal} />
            <ModalBody>
              {isIOSDevice ? (
                <>
                  <p>To install this app on your iOS device:</p>
                  <p>1. Tap the Share button in Safari.</p>
                  <p>2. Tap {"'"}Add to Home Screen{"'"}.</p>
                </>
              ) : (
                "Install this app on your device for the best experience."
              )}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closeModal}>
                Cancel
              </Button>
              {!isIOSDevice && (
                <Button colorScheme="green" onClick={() => handleInstallClick(deferredPrompt)}>
                  Install
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      {children}
    </InstallContext.Provider>
  );
};
