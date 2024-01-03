import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'services/fetchAuth';
import { selectUser } from '../../redux/selectors';
import { Button, Flex, Avatar, Text } from '@chakra-ui/react';
import { MdOutlineLogout } from "react-icons/md";
import { GoPerson } from "react-icons/go";
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogOut = () => dispatch(logOut());

  return (
    <Flex minWidth='max-content' alignItems='center' gap='3'>
      <Avatar size='sm' bg='red.500' icon={<GoPerson size={22} />} />
      <Text fontSize="16px">Welcome, {user.name}</Text>
      <Button colorScheme="inherit" p={0} leftIcon={<MdOutlineLogout size={22} />} onClick={handleLogOut}><Text fontSize="18px">Log out</Text></Button>
    </Flex>
  );
};
