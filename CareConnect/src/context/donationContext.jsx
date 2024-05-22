import React, { createContext, useContext, useState, useEffect } from 'react';
import DonationRepository from '../Repositories/donationRepository';

const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);
  const [selectedDonation, setSelectedDonation] = useState(null);

  const fetchDonations = async () => {
    try {
      const response = await DonationRepository.getDonation();
      setDonations(response.data);
    } catch (error) {
      console.error("Erro ao buscar doações:", error);
    }
  };

  const createOrUpdateDonation = async (donation) => {
    try {
      if (donation._id) {
        await DonationRepository.updateDonation(donation._id, donation);
      } else {
        await DonationRepository.createDonation(donation);
      }
      fetchDonations();
      clearSelection();
    } catch (error) {
      console.error("Erro ao criar/atualizar doação:", error);
    }
  };

  const deleteDonationById = async (id) => {
    try {
      await DonationRepository.deleteDonation(id);
      fetchDonations();
    } catch (error) {
      console.error("Erro ao deletar doação:", error);
    }
  };

  const selectDonation = (donation) => setSelectedDonation(donation);

  const clearSelection = () => setSelectedDonation(null);

  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <DonationContext.Provider
      value={{ donations, fetchDonations, createOrUpdateDonation, deleteDonationById, selectDonation, selectedDonation, clearSelection }}
    >
      {children}
    </DonationContext.Provider>
  );
};

export const useDonationContext = () => useContext(DonationContext);


