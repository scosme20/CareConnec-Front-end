import React, { useState } from 'react';
import { useHostelContext } from '../../context/hostelContext';
import { FloppyDisk } from "@phosphor-icons/react";
import { Button } from '../../styles/hostel.styles';

const HostelForm = () => {
  const { createOrUpdateHostel } = useHostelContext();
  const [formData, setFormData] = useState({ nome: '', localizacao: '', capacidade: 0, servicos: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrUpdateHostel(formData);
    setFormData({ nome: '', localizacao: '', capacidade: 0, servicos: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required />
      <input type="text" name="localizacao" value={formData.localizacao} onChange={handleChange} placeholder="Localização" required />
      {/* Alterado o nome das chaves para corresponder ao estado */}
      <input type="number" name="capacidade" value={formData.capacidade} onChange={handleChange} placeholder="Capacidade" required />
      {/* Alterado o nome das chaves para corresponder ao estado */}
      <input type="text" name="servicos" value={formData.servicos} onChange={handleChange} placeholder="Serviços" required />
      {/* Alterado o nome das chaves para corresponder ao estado */}
     
      <Button type="submit">
        <FloppyDisk size={32} />
      </Button>
      
    </form>
  );
};

export default HostelForm;












