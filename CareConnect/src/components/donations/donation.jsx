import React from 'react';
import DonationForm from './donationForm';
import DonationList from './donationList';
import { DonationPage } from '../../styles/Donation.styles';

const Donation = () => {
  return (
    <DonationPage>
      <h2>Cadastrar Doação</h2>
      <DonationForm />
        <h2>Lista de Doações</h2>
      <DonationList />
    </DonationPage>
  );
};

export default Donation;

