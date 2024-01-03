import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  background-color: inherit;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Field = styled(FormikField)`
  font-size: 16px;
  border: 1px solid #1c56c3;
  border-radius: 4px;
  outline: none;
  padding: 12px;
`;

export const FormButton = styled.button`
  background-color: #1c56c3;
  color: #fff;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #0e45ab;
  }
`;
export const ErrorMessage = styled(FormikError)`
  font-size: 14;
  color: #d15803;
`;
