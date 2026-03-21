'use client'
import {
  Box,
} from '@chakra-ui/react'
import { BottomNav } from './BottomNav'
import { DesktopNav } from './DesktopNav'

export const Navigation = () => {

  return (
    <>
    <Box mb={10} display={['none', 'none', 'unset']}>
        <DesktopNav />
    </Box>
    <Box display={['unset', 'unset', 'none']}>
        <BottomNav />
    </Box>
    </>
  )
}

