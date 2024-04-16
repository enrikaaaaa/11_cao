import Button from "../../common/Buttons/Button";
import PropTypes from "prop-types";
import Text from "../../common/Text/Text";
import { addPet } from "../../api/Pets";
import styled from "styled-components";
import { useState } from "react";

const NewPet = ({ onClose }) => {
  const [petName, setPetName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (petName === "" || birthDate === "" || email === "") {
      setError("Please fill in all fields");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    addPet({ name: petName, birthDate, email });

    window.location.reload();

    onClose();
  };

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <ModalContent>
      <Text level={2}>Add New Pet</Text>
      <StyledForm>
        <label>Name:</label>
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <label>Birth Date:</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ErrorText>{error}</ErrorText>
        <Button onClick={handleSubmit}>Add Pet</Button>
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

NewPet.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NewPet;
