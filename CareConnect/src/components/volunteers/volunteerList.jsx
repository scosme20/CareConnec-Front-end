import React from 'react';
import { useVolunteerContext } from '../../context/volunteerContext';
import { ListContainer, ListItem, Paragraph, EditButton, DeleteButton } from '../../styles/volunteerList.style';

const VolunteerList = () => {
  const { volunteers, deleteVolunteer, selectVolunteer } = useVolunteerContext();

  return (
    <ListContainer>
      {volunteers.map(volunteer => (
        <ListItem key={volunteer._id}>
          <Paragraph>Nome: {volunteer.name}</Paragraph>
          <Paragraph>Função: {volunteer.role}</Paragraph>
          <Paragraph>Turno: {volunteer.shift}</Paragraph>
          <Paragraph>Contato: {volunteer.contact}</Paragraph>
          <EditButton onClick={() => selectVolunteer(volunteer)}>Editar</EditButton>
          <DeleteButton onClick={() => deleteVolunteer(volunteer._id)}>Deletar</DeleteButton>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default VolunteerList;




