import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'services/fetchContacts';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container, Text } from '@chakra-ui/react';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxW="md" borderRadius="md" textAlign="center" p="4">
      {isLoading && !error && <Loader />}
      <ContactForm />
      {error && (
        <Text p={10} fontSize={18}>
          We're sorry, {error}
        </Text>
      )}
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Text p={10} fontSize={18}>
          You don't have any contacts! Add your first contact!
        </Text>
      )}
    </Container>
  );
}
