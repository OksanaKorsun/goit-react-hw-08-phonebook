import styled from 'styled-components';
import { FaTrashCan } from 'react-icons/fa6';
export const StyledIcon = styled(FaTrashCan)`
  color: #f5904d;
  &:hover {
    color: #f8731c;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 4px;
  background-color: rgb(254, 236, 224);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemText = styled.div`
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  background-color: inherit;
  color: #fff;
  border: none;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
`;
