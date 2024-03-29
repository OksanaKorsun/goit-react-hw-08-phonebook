import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu.js';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { Flex, Spacer } from '@chakra-ui/react';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Flex bg="#1C56C3" w="100%" p={4} pl={10} pr={10} color="white">
        <Navigation />
        <Spacer />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </header>
  );
};
