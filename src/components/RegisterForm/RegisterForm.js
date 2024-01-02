import { useDispatch } from 'react-redux';
import { register } from '../../services/fetchAuth';
import { useState } from 'react';
import { Form, Label, Field, Button} from '../LoginForm/LoginForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Field
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
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
      <Button type="submit">Register</Button>
    </Form>
  );
};
