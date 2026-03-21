import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setLoading: () => {},
});

interface LoadingContextProviderProps {
  children: ReactNode;
}

export const LoadingContextProvider = ({ children }: LoadingContextProviderProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
