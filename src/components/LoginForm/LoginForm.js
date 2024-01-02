import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'services/fetchAuth';
import { Form, Label, Field, Button} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Field
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Password
        <Field
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
