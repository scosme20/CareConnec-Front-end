import React from 'react';
import VolunteerForm from './volunteerForm';
import VolunteerList from './volunteerList';
import { PageContainer, Title } from '../../styles/volunteer.Style';

const VolunteerPage = () => {
  return (
    <PageContainer>
      <Title>Voluntários</Title>
      <VolunteerForm />
      <VolunteerList />
    </PageContainer>
  );
};

export default VolunteerPage;




