// import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    // <div>
    //   <NavLink to="/register">
    //     Register
    //   </NavLink>
    //   <NavLink to="/login">
    //     Log In
    //   </NavLink>
    // </div>
    <Breadcrumb spacing="8px">
      <BreadcrumbItem>
        <BreadcrumbLink href="/goit-react-hw-08-phonebook/register">
          Register
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/goit-react-hw-08-phonebook/login">
          Log in
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
