import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { selectIsLoading } from '../redux/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'services/fetchContacts';
import { ContactForm } from 'components/ContactForm/ContactForm';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>

      <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm />
      <ContactList />
    </>
  );
}
