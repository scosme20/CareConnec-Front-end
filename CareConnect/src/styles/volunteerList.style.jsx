import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.div`
  background: #f9f9f9;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Paragraph = styled.p`
  margin: 5px 0;
`;

export const EditButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #ffeb3b;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  cursor: pointer;
`;
