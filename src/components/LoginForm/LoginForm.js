// import { Formik, Form, Field} from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'services/fetchAuth';
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   FormErrorMessage,
// } from '@chakra-ui/react';
// import * as Yup from 'yup';
// const contactSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(3, 'Too Short!')
//     .max(30, 'Too Long!')
//     .required('Required'),
//   number: Yup.number()
//     .integer('Must be an integer')
//     .min(1000000, 'Must be at least 7 digits')
//     // .max(9999999, 'Must be at most 7 digits')
//     .required('Required'),
// });

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
    
}
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
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" value={email} onChange={handleChange} required/>
      </label>
      <label>
        Password
        <input type="password" name="password" value={password } onChange={handleChange} required/>
      </label>
      <button type="submit">Log In</button>
    </form>

    // <Formik
    //   initialValues={{
    //       email: '',
    //       password: '',
    //   }}
    //   //  validationSchema={contactSchema}
    //   onSubmit={(values, actions) => {
    //       handleSubmit(values);
    //       actions.resetForm();
    //     }}
    // >
      
    //     <Form>
    //       <Field name='email'>
    //         {({ field, form }) => (
    //           <FormControl isInvalid={form.errors.name && form.touched.name}>
    //             <FormLabel>Email</FormLabel>
    //             <Input {...field} placeholder='email' />
    //             <FormErrorMessage>{form.errors.name}</FormErrorMessage>
    //           </FormControl>
    //         )}
    //     </Field>
    //     <Field name='password'>
    //         {({ field, form }) => (
    //           <FormControl isInvalid={form.errors.name && form.touched.name}>
    //             <FormLabel>Password</FormLabel>
    //             <Input {...field} placeholder='password' />
    //             <FormErrorMessage>{form.errors.name}</FormErrorMessage>
    //           </FormControl>
    //         )}
    //     </Field>
        
    //       <Button
    //         mt={4}
    //         colorScheme='teal'
    //         type='submit'
    //       >
    //         Log In
    //       </Button>
    //     </Form>
      
    // </Formik>

    
  );
};
