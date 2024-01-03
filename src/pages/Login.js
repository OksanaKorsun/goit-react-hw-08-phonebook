import { Container, Heading } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <Container maxW="md" borderRadius="md" textAlign="center" mt="4">
      <Heading as="h2" size="md">
        Login
      </Heading>
      <LoginForm />
    </Container>
  );
}
