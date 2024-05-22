import React, { createContext, useContext, useState, useEffect } from 'react';
import HostelRepository from '../Repositories/hostelRepository';

const HostelContext = createContext();

const HostelProvider = ({ children }) => {
  const [hostels, setHostels] = useState([]);

  const fetchHostels = async () => {
    try {
      const data = await HostelRepository.getAllHostels();
      setHostels(data);
    } catch (error) {
      console.error('Erro ao buscar albergues:', error);
      setHostels([]);
    }
  };

  useEffect(() => {
    fetchHostels();
  }, []); 

  const createOrUpdateHostel = async (hostel) => {
    try {
      if (hostel._id) {
        await HostelRepository.updateHostel(hostel._id, hostel);
      } else {
        await HostelRepository.createHostel(hostel);
      }
      fetchHostels();
    } catch (error) {
      console.error('Erro ao criar/atualizar albergue:', error);
    }
  };

  const deleteHostel = async (id) => {
    try {
      await HostelRepository.deleteHostel(id);
      fetchHostels();
    } catch (error) {
      console.error('Erro ao excluir albergue:', error);
    }
  };

  // Função para editar um albergue
  const editHostel = async (id, newData) => {
    try {
      await HostelRepository.updateHostel(id, newData);
      fetchHostels();
    } catch (error) {
      console.error('Erro ao editar albergue:', error);
    }
  };

  return (
    <HostelContext.Provider
      value={{ hostels, fetchHostels, createOrUpdateHostel, deleteHostel, editHostel }}
    >
      {children}
    </HostelContext.Provider>
  );
};

export { HostelContext, HostelProvider };

export const useHostelContext = () => useContext(HostelContext);




















