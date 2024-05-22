import React from 'react';
import DonationForm from './donationForm';
import DonationList from './donationList';

const Donation = () => {
  return (
    <div>
      <h2>Cadastrar Doação</h2>
      <DonationForm />
      <h2>Lista de Doações</h2>
      <DonationList />
    </div>
  );
};

export default Donation;

