import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'services/fetchContacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from '@chakra-ui/react';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxW="xl" bg='blue.400'>
      <title>Your contacts</title>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm />
      <Filter />
      {error ? <p>error</p> : <ContactList />}
      {contacts.length === 0 && !error && !isLoading && <p>no contacts</p>}
    </Container>
  );
}
