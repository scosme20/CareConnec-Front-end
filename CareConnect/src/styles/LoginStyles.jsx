import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }

  button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #218838;
    }
  }
`;
