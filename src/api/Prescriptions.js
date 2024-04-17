import { API } from "./consts";
import axios from "axios";

export const postPrescription = async (prescriptionData) => {
  const response = await axios.post(`${API}/Prescriptions`, prescriptionData);
  return await response.data;
};
export const getPrescriptionsByPetId = async (petId) => {
  const response = await axios.get(`${API}/Prescriptions?petId=${petId}`);
  return await response.data;
};
