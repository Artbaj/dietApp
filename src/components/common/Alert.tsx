import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { ReactNode } from 'react';


  const alertStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: 1000,
};

export const ErrorAlert = ({message}: {message: string}) => {
    return (
        <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Error</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    )
}

export const SuccessAlert = ({message}: {message: string, children?: any}) => {
    return (
        <Alert status="success" style={alertStyle}>
            <AlertIcon />
            <AlertTitle mr={2}>Success</AlertTitle>
            <AlertDescription>
                {message}
            </AlertDescription>
        </Alert>
    )
}

export const InfoAlert = ({message, title, children}: {message: string, title?: string, children?: ReactNode}) => {
    return (
        <Alert status="info" style={alertStyle}>
            <AlertIcon />
            {title && <AlertTitle mr={2}>{title}</AlertTitle>}
            <AlertDescription>{message}</AlertDescription>
            {children}
        </Alert>
    )
}