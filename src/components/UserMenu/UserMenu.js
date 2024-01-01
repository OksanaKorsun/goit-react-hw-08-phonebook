import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'services/fetchAuth';
import { selectUser } from '../../redux/selectors';
import { Button, Flex } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
      <p>Welcome, {user.name}</p>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button> */}
      <Button colorScheme="inherit" onClick={() => dispatch(logOut())}>Log out</Button>
    </Flex>
  );
};
