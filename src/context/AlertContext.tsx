import React, { createContext, ReactNode, useState } from 'react';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

interface AlertContextType {
  showAlert: (type: 'error' | 'success', message: string) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType>({
  showAlert: () => {},
  hideAlert: () => {},
});

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertContextProvider = ({ children }: AlertProviderProps) => {
  const [alert, setAlert] = useState<{ type: 'error' | 'success' | null, message: string }>({ type: null, message: '' });

  const showAlert = (type: 'error' | 'success', message: string) => {
    setAlert({ type, message });
  };

  const hideAlert = () => {
    setAlert({ type: null, message: '' });
  };

  const alertComponent = alert.type ? (
    <Alert 
        status={alert.type} 
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }} 
        shadow={'lg'} 
    >
      <AlertIcon />
      <AlertTitle mr={2}>{alert.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
      <AlertDescription>{alert.message}</AlertDescription>
    </Alert>
  ) : null;

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alertComponent}
    </AlertContext.Provider>
  );
};

export const useAlert = () => React.useContext(AlertContext);
