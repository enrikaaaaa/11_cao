import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import { getMedications } from "../../api/Medications";
import { postPrescription } from "../../api/Prescriptions";

const AddPrescription = ({ petId, onClose }) => {
  const [prescriptionData, setPrescriptionData] = useState({
    medication: "",
    dosage: "",
    dosageUnit: "",
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
    if (name === "dosage" && !/^\d*$/.test(value)) {
      return;
    }
    setPrescriptionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !prescriptionData.medication ||
      !prescriptionData.dosage ||
      !prescriptionData.dosageUnit
    ) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      await postPrescription({ ...prescriptionData, petId });
      setPrescriptionData({ medication: "", dosage: "", dosageUnit: "" });
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
        <label>Dosage:</label>
        <input
          type="text"
          name="dosage"
          value={prescriptionData.dosage}
          onChange={handleChange}
          placeholder="Enter Dosage"
        />
        <select
          name="dosageUnit"
          value={prescriptionData.dosageUnit}
          onChange={handleChange}
        >
          <option value="">Select Dosage Unit</option>
          <option value="pill">Pill(s)</option>
          <option value="ml">mL</option>
          <option value="mg">mg</option>
        </select>
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
