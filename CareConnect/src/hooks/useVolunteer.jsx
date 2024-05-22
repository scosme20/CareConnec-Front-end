// useVolunteer.js
import { useContext } from 'react';
import { VolunteerContext } from '../context/volunteerContext';

const useVolunteer = () => {
  return useContext(VolunteerContext);
};

export default useVolunteer;

