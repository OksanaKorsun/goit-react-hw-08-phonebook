import { Container, Heading } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';


export default function Register() {
  return (
    // <div>
    //   <Helmet>
    //     <title>Registration</title>
    //   </Helmet>
    //  
    // </div>
    <Container maxW="md" borderRadius="md" textAlign="center">
      <Heading as='h2' size='md'>Registration</Heading>
       <RegisterForm />
    </Container>
  );
}
