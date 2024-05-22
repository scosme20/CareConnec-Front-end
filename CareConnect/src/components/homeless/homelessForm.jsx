import React, { useState, useContext, useEffect } from 'react';
import { HomelessContext } from '../../context/homelessContext';
import { Form, Input, Button } from '../../styles/homelessStyle';

const HomelessForm = () => {
  const { createHomeless, updateHomeless, selectedHomeless, clearSelection } = useContext(HomelessContext);
  const [formData, setFormData] = useState({ nome: '', idade: '', historico: '', necessidades: {} });

  useEffect(() => {
    if (selectedHomeless) {
      setFormData(selectedHomeless);
    } else {
      setFormData({ nome: '', idade: '', historico: '', necessidades: {} });
    }
  }, [selectedHomeless]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData._id) {
      updateHomeless(formData._id, formData);
    } else {
      createHomeless(formData);
    }
    clearSelection(); // Limpa a seleção após o envio do formulário
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required />
      <Input name="idade" value={formData.idade} onChange={handleChange} placeholder="Idade" required />
      <Input name="historico" value={formData.historico} onChange={handleChange} placeholder="Histórico" required />
      <Button type="submit">Salvar</Button>
      {selectedHomeless && <Button type="button" onClick={clearSelection}>Cancelar</Button>}
    </Form>
  );
};

export default HomelessForm;
