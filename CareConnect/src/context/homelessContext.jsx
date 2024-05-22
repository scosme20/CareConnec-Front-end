import React, { createContext, useContext, useState, useEffect } from 'react';
import HomelessRepository from '../Repositories/homelessRepositories'

const HomelessContext = createContext();

const HomelessProvider = ({ children }) => {
  const [homelessList, setHomelessList] = useState([]);
  const [selectedHomeless, setSelectedHomeless] = useState(null);

  const fetchHomelessList = async () => {
    try {
      const response = await HomelessRepository.getHomeless();
      setHomelessList(response.data);
    } catch (error) {
      console.error("Erro ao buscar moradores de rua:", error);
    }
  };

  const createHomeless = async (homeless) => {
    try {
      const response = await HomelessRepository.createHomeless(homeless);
      setHomelessList([...homelessList, response.data]);
    } catch (error) {
      console.error("Erro ao criar morador de rua:", error);
    }
  };

  const updateHomeless = async (id, updatedHomeless) => {
    try {
      await HomelessRepository.updateHomeless(id, updatedHomeless);
      fetchHomelessList();
    } catch (error) {
      console.error("Erro ao atualizar morador de rua:", error);
    }
  };

  const deleteHomeless = async (id) => {
    try {
      await HomelessRepository.deleteHomeless(id);
      setHomelessList(homelessList.filter(homeless => homeless._id !== id));
    } catch (error) {
      console.error("Erro ao deletar morador de rua:", error);
    }
  };

  const selectHomeless = (homeless) => {
    setSelectedHomeless(homeless);
  };

  const clearSelection = () => {
    setSelectedHomeless(null);
  };

  useEffect(() => {
    fetchHomelessList();
  }, []);

  return (
    <HomelessContext.Provider
      value={{
        homelessList,
        selectedHomeless,
        fetchHomelessList,
        createHomeless,
        updateHomeless,
        deleteHomeless,
        selectHomeless,
        clearSelection
      }}
    >
      {children}
    </HomelessContext.Provider>
  );
};

export { HomelessContext, HomelessProvider };

export const useHomelessContext = () => useContext(HomelessContext);
