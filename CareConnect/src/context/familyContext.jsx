import React, { createContext, useContext, useState, useEffect } from 'react';
import FamilyRepository from '../Repositories/familiesRepositories';

const FamilyContext = createContext();

const FamilyProvider = ({ children }) => {
  const [families, setFamilies] = useState([]);
  const [selectedFamily, setSelectedFamily] = useState(null); // Adicionado para gerenciar a seleção da família

  const fetchFamilies = async () => {
    try {
      const response = await FamilyRepository.getFamilies();
      setFamilies(response.data);
    } catch (error) {
      console.error("Erro ao buscar famílias:", error);
    }
  };

  const createFamily = async (family) => {
    try {
      const response = await FamilyRepository.createFamilies(family);
      setFamilies([...families, response.data]);
    } catch (error) {
      console.error("Erro ao criar família:", error);
    }
  };

  const updateFamily = async (id, updatedFamily) => {
    try {
      await FamilyRepository.updateFamilies(id, updatedFamily);
      fetchFamilies();
    } catch (error) {
      console.error("Erro ao atualizar família:", error);
    }
  };

  const deleteFamily = async (id) => {
    try {
      await FamilyRepository.deleteFamilies(id);
      setFamilies(families.filter(family => family._id !== id));
    } catch (error) {
      console.error("Erro ao deletar família:", error);
    }
  };

  const selectFamily = (family) => {
    setSelectedFamily(family);
  };

  const clearSelection = () => {
    setSelectedFamily(null);
  };

  useEffect(() => {
    fetchFamilies();
  }, []);

  return (
    <FamilyContext.Provider
      value={{
        families,
        selectedFamily,
        fetchFamilies,
        createFamily,
        updateFamily,
        deleteFamily,
        selectFamily,
        clearSelection
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export { FamilyContext, FamilyProvider };

export const useFamilyContext = () => useContext(FamilyContext);















