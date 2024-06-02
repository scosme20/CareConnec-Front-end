import React, { useState, useEffect } from 'react';
import { useHostelContext } from '../../context/hostelContext';
import { FloppyDisk } from "@phosphor-icons/react";
import { BackgroundColor, Button } from '../../styles/hostel.styles';


const HostelForm = () => {
  const { createHostel, updateHostel, selectedHostel, clearSelection } = useHostelContext();
  const [formData, setFormData] = useState({ nome: '', localizacao: '', capacidade: 0, servicos: '' });

  useEffect(() => {
    if (selectedHostel) {
      setFormData(selectedHostel);
    } else {
      setFormData({ nome: '', localizacao: '', capacidade: 0, servicos: '' });
    }
  }, [selectedHostel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._id) {
      await updateHostel(formData._id, formData);
    } else {
      await createHostel(formData);
    }
    clearSelection();
    setFormData({ nome: '', localizacao: '', capacidade: 0, servicos: '' });
  };

  return (
    <>
    <BackgroundColor/>
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required />
      <input type="text" name="localizacao" value={formData.localizacao} onChange={handleChange} placeholder="Localização" required />
      <input type="number" name="capacidade" value={formData.capacidade} onChange={handleChange} placeholder="Capacidade" required />
      <input type="text" name="servicos" value={formData.servicos} onChange={handleChange} placeholder="Serviços" required />
      {/* Alterado o nome das chaves para corresponder ao estado */}
      <button type="submit">Salvar</button>
    </form>
</>
  );
};

export default HostelForm;












