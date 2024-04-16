import { API } from "./consts";
import axios from "axios";
export const addPrescription = async (id) => {
  const response = await axios.post(`${API}/Pets/${id}/presriptions`, id);
  return await response.data;
};
