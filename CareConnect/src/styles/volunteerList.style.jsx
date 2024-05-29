import styled from 'styled-components';

export const ListContainer = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.div`
  background: #f9f9f9;
  padding: 10px;
  margin: 10px 0;
  width: 400px;
  max-width: 600px;
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

export const Paragraph = styled.p`
  margin: 5px 0;
`;

export const EditButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #E8EDDF;
  color: #242423;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #F5CB5C;
  color: #242423;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
`;
