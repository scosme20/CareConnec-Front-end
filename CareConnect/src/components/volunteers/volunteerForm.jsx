import React, { useState, useEffect } from 'react';
import { useVolunteerContext } from '../../context/volunteerContext';
import { Form, Input, Button } from '../../styles/volunteerForm.styles';

const VolunteerForm = () => {
  const { createVolunteer, updateVolunteer, selectedVolunteer, clearSelection } = useVolunteerContext();
  const [formData, setFormData] = useState({ name: '', role: '', shift: '', contact: '' });

  useEffect(() => {
    if (selectedVolunteer) {
      setFormData({ ...selectedVolunteer });
    } else {
      setFormData({ name: '', role: '', shift: '', contact: '' });
    }
  }, [selectedVolunteer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedVolunteer) {
      updateVolunteer(selectedVolunteer._id, formData);
    } else {
      createVolunteer(formData);
    }
    clearSelection();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nome"
        required
      />
      <Input
        type="text"
        name="role"
        value={formData.role}
        onChange={handleChange}
        placeholder="Função"
        required
      />
      <Input
        type="text"
        name="shift"
        value={formData.shift}
        onChange={handleChange}
        placeholder="Turno"
      />
      <Input
        type="text"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder="Contato"
      />
      <Button type="submit">{selectedVolunteer ? 'Atualizar' : 'Adicionar'}</Button>
      {selectedVolunteer && <Button type="button" onClick={clearSelection}>Cancelar</Button>}
    </Form>
  );
};

export default VolunteerForm;




