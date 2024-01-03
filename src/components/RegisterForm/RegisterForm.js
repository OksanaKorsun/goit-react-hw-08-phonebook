import { useDispatch } from 'react-redux';
import { register } from '../../services/fetchAuth';
import { useState } from 'react';
import {
  Button,
  StyledField,
  StyledForm,
} from 'components/LoginForm/LoginForm.styled';

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
    console.log(form);
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
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledField
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        required
        placeholder="Username:"
        pattern="/^[a-zA-Z-]+$/"
      />

      <StyledField
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
        placeholder="Email:"
      />

      <StyledField
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
        placeholder="Password:"
      />

      <Button type="submit">Register</Button>
    </StyledForm>
  );
};
