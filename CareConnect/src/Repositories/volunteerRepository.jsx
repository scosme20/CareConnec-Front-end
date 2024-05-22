import VolunteerService from '../services/volunteerService';

const VolunteerRepository = {
  getAllVolunteers: async () => {
    const response = await VolunteerService.getVolunteers();
    return response.data;
  },
  createVolunteer: async (volunteer) => {
    const response = await VolunteerService.createVolunteer(volunteer);
    return response.data;
  },
  updateVolunteer: async (id, volunteer) => {
    const response = await VolunteerService.updateVolunteer(id, volunteer);
    return response.data;
  },
  deleteVolunteer: async (id) => {
    const response = await VolunteerService.deleteVolunteer(id);
    return response.data;
  }
};

export default VolunteerRepository;


