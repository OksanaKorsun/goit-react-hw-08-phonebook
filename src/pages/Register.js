import { Container, Heading } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <Container maxW="md" borderRadius="md" textAlign="center" mt="4">
      <Heading as="h2" size="md">
        Registration
      </Heading>
      <RegisterForm />
    </Container>
  );
}
