import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/selectors';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};
export default function Home() {
  const user = useSelector(selectUser);
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <div style={styles.container}>
      {isLoggedin ? (
        <h1 style={styles.title}>
          Hello, {user.name}! Wellcome to your phoneBook.
        </h1>
      ) : (
        <h1 style={styles.title}>Hello! I'm your phonebook.</h1>
      )}
    </div>
  );
}
