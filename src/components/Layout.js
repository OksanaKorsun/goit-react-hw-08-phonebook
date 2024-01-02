import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from '@chakra-ui/react'

export const Layout = () => {
  return (
    <Box w='100%'color='#161414'>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
