import styled from 'styled-components';

export const DonationContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const DonationItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const DonationDetails = styled.div`
  margin-bottom: 10px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
