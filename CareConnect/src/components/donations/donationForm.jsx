import React, { useState, useEffect } from 'react';
import { useDonationContext } from '../../context/donationContext';
import { Form, Input, Button } from '../../styles/Donation.styles';

const DonationForm = () => {
  const { createOrUpdateDonation, selectedDonation, clearSelection } = useDonationContext();
  const [formData, setFormData] = useState({ tipo: '', quantidade: '', origem: '' });

  useEffect(() => {
    if (selectedDonation) {
      setFormData(selectedDonation);
    }
  }, [selectedDonation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrUpdateDonation(formData);
    setFormData({ tipo: '', quantidade: '', origem: '' });
    clearSelection();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="tipo" value={formData.tipo} onChange={handleChange} placeholder="Tipo" required />
      <Input name="quantidade" type="number" value={formData.quantidade} onChange={handleChange} placeholder="Quantidade" required />
      <Input name="origem" value={formData.origem} onChange={handleChange} placeholder="Origem" required />
      <Button type="submit">Salvar</Button>
    </Form>
  );
};

export default DonationForm;

