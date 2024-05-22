import React, { useState, useContext, useEffect } from 'react';
import { FamilyContext } from '../../context/familyContext';
import { Form, Input, Button } from '../../styles/Families.styles';

const FamiliesForm = () => {
  const { createFamily, updateFamily, selectedFamily, clearSelection } = useContext(FamilyContext);
  const [formData, setFormData] = useState({ name: '', register: '', donation: '', followUp: '' });

  useEffect(() => {
    if (selectedFamily) {
      setFormData(selectedFamily);
    } else {
      setFormData({ name: '', register: '', donation: '', followUp: '' });
    }
  }, [selectedFamily]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData._id) {
      updateFamily(formData._id, formData);
    } else {
      createFamily(formData);
    }
    clearSelection(); // Limpa a seleção após o envio do formulário
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" value={formData.name} onChange={handleChange} placeholder="Nome" required />
      <Input name="register" value={formData.register} onChange={handleChange} placeholder="Registro" required />
      <Input name="donation" value={formData.donation} onChange={handleChange} placeholder="Doação" required />
      <Input name="followUp" value={formData.followUp} onChange={handleChange} placeholder="Acompanhamento" required />
      <Button type="submit">Salvar</Button>
      {selectedFamily && <Button type="button" onClick={clearSelection}>Cancelar</Button>}
    </Form>
  );
};

export default FamiliesForm;






