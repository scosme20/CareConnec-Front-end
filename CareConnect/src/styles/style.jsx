import styled from "styled-components";

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
  border: 1px solid #333533;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;

  h3 {
    color: #333533;
    margin-bottom: 5px;
  }

  p {
    color: #333533;
    margin-bottom: 3px;
  }

  button {
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 3px;
     margin-top: 5px;
    margin-right: 10px;
    cursor: pointer;

    &:hover {
      background-color: #F5CB5C;
      color: white;
    }
  }
`;
