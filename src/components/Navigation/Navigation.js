// import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Flex,
} from '@chakra-ui/react';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    // <nav>
    //   <NavLink to="/">
    //     Home
    //   </NavLink>
    //   {isLoggedIn && (
    //     <NavLink to="/contacts">
    //       Contacts
    //     </NavLink>
    //   )}
    // </nav>
    <Flex minWidth="max-content" alignItems="center">
      <Breadcrumb spacing="8px">
        <BreadcrumbItem>
          <BreadcrumbLink href="/goit-react-hw-08-phonebook/">
            <Text fontSize="18px">Home</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {isLoggedIn && (
          <BreadcrumbItem>
            <BreadcrumbLink href="/goit-react-hw-08-phonebook/contacts">
              <Text fontSize="18px">Contacts</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
    </Flex>
  );
};
