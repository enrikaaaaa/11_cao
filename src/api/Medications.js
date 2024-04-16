import { API } from "./consts";
import axios from "axios";

export const getMedications = async () => {
  const response = await axios.get(`${API}/Medications`);
  return await response.data;
};
export const addMedication = async (data) => {
  const response = await axios.post(`${API}/Medications`, data);
  return await response.data;
};
export const deleteMedication = async (id) => {
  const response = await axios.delete(`${API}/Medications/${id}`);
  return await response.data;
};
export const getMedicationById = async (id) => {
  const response = await axios.get(`${API}/Medications/${id}`);
  return await response.data;
};
export const updateMedication = async (id, data) => {
  const response = await axios.put(`${API}/Medications/${id}`, data);
  return await response.data;
};
