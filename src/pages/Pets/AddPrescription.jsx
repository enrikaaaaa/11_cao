import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { getMedications } from "../../api/Medications";
import { postPrescription } from "../../api/Prescriptions";

const AddPrescription = ({ petId, onClose }) => {
  const [prescriptionData, setPrescriptionData] = useState({
    medication: "",
    dosage: "",
  });
  const [error, setError] = useState("");
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    getMedications()
      .then((response) => {
        setMedications(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrescriptionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prescriptionData.medication || !prescriptionData.dosage) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      await postPrescription({ ...prescriptionData, petId });
      setPrescriptionData({ medication: "", dosage: "" });
      window.location.reload();
      onClose();
    } catch (error) {
      console.error("Error adding prescription:", error);
    }
  };

  return (
    <div>
      <h2>Add Prescription</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Medication:</label>
        <select
          name="medication"
          value={prescriptionData.medication}
          onChange={handleChange}
        >
          <option value="">Select Medication</option>
          {medications.map((medication) => (
            <option key={medication.id} value={medication.name}>
              {medication.name}
            </option>
          ))}
        </select>
        <br />
        <label>
          Dosage:
          <input
            type="text"
            name="dosage"
            value={prescriptionData.dosage}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Prescription</button>
      </form>
    </div>
  );
};

AddPrescription.propTypes = {
  petId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddPrescription;
