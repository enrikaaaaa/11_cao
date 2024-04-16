import Button from "../../common/Buttons/Button";
import PropTypes from "prop-types";
import Text from "../../common/Text/Text";
import { addMedication } from "../../api/Medications";
import styled from "styled-components";
import { useState } from "react";

const NewMedication = ({ onClose }) => {
  const [medicationName, setMedicationName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    addMedication({ name: medicationName, description, date });

    window.location.reload();

    onClose();
  };

  return (
    <ModalContent>
      <Text level={2}>Add New Pet</Text>
      <StyledForm>
        <label>Name:</label>
        <input
          type="text"
          value={medicationName}
          onChange={(e) => setMedicationName(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Button onClick={handleSubmit}>Add Medication</Button>
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

NewMedication.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NewMedication;
