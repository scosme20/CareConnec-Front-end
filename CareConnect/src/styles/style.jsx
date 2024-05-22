import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid blue;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

export const ListContainer = styled.div`
  margin-top: 20px;
`;

export const Item = styled.div`
  border: 1px solid blue;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;

  h3 {
    color: red;
    margin-bottom: 5px;
  }

  p {
    color: black;
    margin-bottom: 3px;
  }

  button {
    background-color: white;
    color: red;
    border: 1px solid red;
    border-radius: 3px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background-color: red;
      color: white;
    }
  }
`;
