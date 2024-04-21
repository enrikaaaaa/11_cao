import { useEffect, useState } from "react";

import AddPrescription from "./AddPrescription";
import Button from "../../common/Buttons/Button";
import Cards from "../../components/Cards/Cards";
import Modal from "../../components/ModalWindow/Modal";
import Text from "../../common/Text/Text";
import { getPetById } from "../../api/Pets";
import { getPrescriptionsByPetId } from "../../api/Prescriptions";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const RightAlignedButton = styled(Button)`
  margin-left: 10px;
  padding: 5px 10px;
  width: auto;
  &:hover {
    background-color: orange;
    color: white;
  }
`;

const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;

  & > div {
    width: 100%;
  }
  & li {
    list-style-type: none;
    width: auto;
    justify-content: center;
    display: flex;
  }
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const PetInformation = () => {
  const { id: petId } = useParams();
  const [petData, setPetData] = useState(null);
  const [prescriptions, setPrescriptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const pet = await getPetById(petId);
        setPetData(pet);
      } catch (error) {
        console.error("Error fetching pet data:", error);
      }
    };

    const fetchPrescriptions = async () => {
      try {
        const prescriptions = await getPrescriptionsByPetId(petId);
        setPrescriptions(prescriptions);
      } catch (error) {
        console.error("Error fetching prescriptions:", error);
      }
    };

    fetchPetData();
    fetchPrescriptions();
  }, [petId]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Text level={2}>Pet Details</Text>
      <StyledButtonsContainer>
        <RightAlignedButton onClick={handleModalOpen}>
          Add Prescription
        </RightAlignedButton>
      </StyledButtonsContainer>

      {petData && (
        <Cards $werysmall>
          <Text level={3}>Name: {petData.name}</Text>
        </Cards>
      )}
      <StyledCardsContainer>
        {prescriptions.length > 0 && (
          <div>
            <div>
              <Text>Prescriptions:</Text>
            </div>

            <ul>
              {prescriptions.map((prescription) => (
                <li key={prescription.id}>
                  <Cards $small>
                    <Text>Medication: {prescription.medication}</Text>
                    <Text>Dosage: {prescription.dosage}</Text>
                    <Text>Dosage Unit: {prescription.dosageUnit}</Text>
                  </Cards>
                </li>
              ))}
            </ul>
          </div>
        )}
      </StyledCardsContainer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <AddPrescription onClose={handleModalClose} petId={petId} />
      </Modal>
    </div>
  );
};

export default PetInformation;
