// src/context/volunteerContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import VolunteerRepository from '../Repositories/volunteerRepository'

const VolunteerContext = createContext();

const VolunteerProvider = ({ children }) => {
  const [volunteers, setVolunteers] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const fetchVolunteers = async () => {
    try {
      const data = await VolunteerRepository.getAllVolunteers();
      setVolunteers(data);
    } catch (error) {
      console.error("Erro ao buscar voluntários:", error);
    }
  };

  const createVolunteer = async (volunteer) => {
    try {
      const newVolunteer = await VolunteerRepository.createVolunteer(volunteer);
      setVolunteers([...volunteers, newVolunteer]);
    } catch (error) {
      console.error("Erro ao criar voluntário:", error);
    }
  };

  const updateVolunteer = async (id, updatedVolunteer) => {
    try {
      const updated = await VolunteerRepository.updateVolunteer(id, updatedVolunteer);
      setVolunteers(volunteers.map(volunteer => volunteer._id === id ? updated : volunteer));
    } catch (error) {
      console.error("Erro ao atualizar voluntário:", error);
    }
  };

  const deleteVolunteer = async (id) => {
    try {
      await VolunteerRepository.deleteVolunteer(id);
      setVolunteers(volunteers.filter(volunteer => volunteer._id !== id));
    } catch (error) {
      console.error("Erro ao deletar voluntário:", error);
    }
  };

  const selectVolunteer = (volunteer) => {
    setSelectedVolunteer(volunteer);
  };

  const clearSelection = () => {
    setSelectedVolunteer(null);
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  return (
    <VolunteerContext.Provider
      value={{
        volunteers,
        selectedVolunteer,
        fetchVolunteers,
        createVolunteer,
        updateVolunteer,
        deleteVolunteer,
        selectVolunteer,
        clearSelection
      }}
    >
      {children}
    </VolunteerContext.Provider>
  );
};

export { VolunteerContext, VolunteerProvider };

export const useVolunteerContext = () => useContext(VolunteerContext);




