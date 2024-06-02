import styled from 'styled-components';


export const DonationPage = styled.div`
  background-color: #F5CB5C;
  padding: 40px;
  font-family: "Mohave", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  font-size: 50px;
  color: #333533;
  text-shadow: 2px 2px 8px #E8EDDF90;
`;

export const DonationContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  background-color: #E8EDDF;
`;

export const Button = styled.button`
  padding: 8px;
  background-color: #CFDBD5;
  color: #333533;
  text-shadow: 0.1px 0.51px 0.5px #333533;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 70px;

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
  font-family: "Mohave", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  font-size: 40px;
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
  background: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  color: #E8EDDF;
  background-color: #242423;
  box-shadow: 1px 1px 8px #e8eddf90;
  border-radius: 30px;
`;
