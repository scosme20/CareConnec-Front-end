import React from 'react';
import { useDonationContext } from '../../context/donationContext';
import { List, ListItem, Button } from '../../styles/Donation.styles';

const DonationList = () => {
  const { donations, deleteDonationById, selectDonation } = useDonationContext();

  return (
    <List>
      {donations.map((donation) => (
        <ListItem key={donation._id}>
          <p>Tipo: {donation.tipo}</p>
          <p>Quantidade: {donation.quantidade}</p>
          <p>Origem: {donation.origem}</p>
          <Button onClick={() => selectDonation(donation)}>Editar</Button>
          <Button onClick={() => deleteDonationById(donation._id)}>Deletar</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default DonationList;

