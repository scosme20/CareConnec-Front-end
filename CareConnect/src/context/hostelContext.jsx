import React, { createContext, useContext, useState, useEffect } from 'react';
import HostelRepository from '../Repositories/hostelRepository';

const HostelContext = createContext();

const HostelProvider = ({ children }) => {
  const [hostels, setHostels] = useState([]);
  const [selectedHostel, setSelectedHostel] = useState(null); 

  const fetchHostels = async () => {
    try {
      const data = await HostelRepository.getAllHostels();
      setHostels(data);
    } catch (error) {
      console.error('Erro ao buscar albergues:', error);
      setHostels([]);
    }
  };

  const createHostel = async (hostel) => {
    try {
      const response = await HostelRepository.createHostel(hostel);
      setHostels([...hostels, response]);
    } catch (error) {
      console.error('Erro ao criar albergue:', error);
    }
  };

  const updateHostel = async (id, updatedHostel) => {
    try {
      await HostelRepository.updateHostel(id, updatedHostel);
      fetchHostels();
    } catch (error) {
      console.error('Erro ao atualizar albergue:', error);
    }
  };

  const deleteHostel = async (id) => {
    try {
      await HostelRepository.deleteHostel(id);
      setHostels(hostels.filter(hostel => hostel._id !== id));
    } catch (error) {
      console.error('Erro ao excluir albergue:', error);
    }
  };

  const selectHostel = (hostel) => {
    setSelectedHostel(hostel);
  };

  const clearSelection = () => {
    setSelectedHostel(null);
  };

  useEffect(() => {
    fetchHostels();
  }, []);

  return (
    <HostelContext.Provider
      value={{
        hostels,
        selectedHostel,
        fetchHostels,
        createHostel,
        updateHostel,
        deleteHostel,
        selectHostel,
        clearSelection
      }}
    >
      {children}
    </HostelContext.Provider>
  );
};

export { HostelContext, HostelProvider };

export const useHostelContext = () => useContext(HostelContext);





















