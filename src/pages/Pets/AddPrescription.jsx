import Button from "../../common/Buttons/Button";
import PropTypes from "prop-types";
import Text from "../../common/Text/Text";
import { addPrescription } from "../../api/Prescriptions";
import styled from "styled-components";
import { useState } from "react";

const AddPrescription = ({ onClose }) => {
  const [medicineName, setMedicineName] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (medicineName === "" || dosage === "" || frequency === "") {
      setError("Please fill in all fields");
      return;
    }

    addPrescription({ medicineName, dosage, frequency });

    onClose();
  };

  return (
    <ModalContent>
      <Text level={2}>Add Prescription</Text>
      <StyledForm>
        <label>Medicine Name:</label>
        <input
          type="text"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
        />
        <label>Dosage:</label>
        <input
          type="text"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />
        <label>Frequency:</label>
        <input
          type="text"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        />
        <ErrorText>{error}</ErrorText>
        <Button onClick={handleSubmit}>Add Prescription</Button>
      </StyledForm>
    </ModalContent>
  );
};

const ModalContent = styled.div`
  padding: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ErrorText = styled.span`
  color: red;
`;

AddPrescription.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddPrescription;
