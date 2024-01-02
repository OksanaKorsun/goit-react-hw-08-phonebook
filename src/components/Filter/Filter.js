// import { Text } from '@chakra-ui/react';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      {/* <Text fontSize='18px'>Find contacts by name</Text> */}
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        placeholder="Find contacts by name:"
        onChange={evt => dispatch(setFilter(evt.target.value))}
        required
      />
    </>
  );
};
