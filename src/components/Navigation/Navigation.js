// import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

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
    <Breadcrumb spacing="8px">
      <BreadcrumbItem>
        <BreadcrumbLink href="/goit-react-hw-08-phonebook/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      {isLoggedIn && (
        <BreadcrumbItem>
          <BreadcrumbLink href="/goit-react-hw-08-phonebook/contacts">
            Contacts
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};
