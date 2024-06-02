import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 300px;
  padding: 20px;

  border-radius: 15px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  background-color: #F5CB5C;
  position: relative;
  z-index: 1;

  h2 {
    margin-bottom: 20px;
    color: #ffffff;
    font-size: 40px;

  }

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 20px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 15px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px 20px;
    background-color: #333533;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #242423;
    }
  }
`;
