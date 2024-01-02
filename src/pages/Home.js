import { Heading } from "@chakra-ui/react";
import { StyledWrap } from "./Pages.styled";

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function Home() {
  return (
    // <div style={styles.container}>
    //   <h1 style={styles.title}>Phonebook</h1>
    // </div>
    <StyledWrap>
      
      <Heading>PhoneBook</Heading>
    </StyledWrap>
  );
}
