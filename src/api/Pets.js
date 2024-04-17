import { API } from "./consts";
import axios from "axios";

export const getPets = async () => {
  const response = await axios.get(`${API}/Pets`);
  return await response.data;
};
export const addPet = async (data) => {
  const response = await axios.post(`${API}/Pets`, data);
  return await response.data;
};
export const deletePet = async (id) => {
  const response = await axios.delete(`${API}/Pets/${id}`);
  return await response.data;
};
export const getPetById = async (id) => {
  const response = await axios.get(`${API}/Pets/${id}`);
  return await response.data;
};
export const updatePet = async (id, data) => {
  const response = await axios.put(`${API}/Pets/${id}`, data);
  return await response.data;
};

export const addPrescriptionToPet = async (id, data) => {
  const response = await axios.post(`${API}/Pets/${id}/Prescriptions`, data);
  return await response.data;
};
