import styled from 'styled-components';
// import { FaTrashCan } from 'react-icons/fa6';
import { FaTrash } from "react-icons/fa6";
export const StyledIcon = styled(FaTrash)`
  color: #1C56C3;
  &:hover {
    color: #0E45AB ;
  }
`;

export const List = styled.ul`
  width: 90%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 30px auto;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 14px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  border-radius: 4px;
  background-color: #C4D2EE ;
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
