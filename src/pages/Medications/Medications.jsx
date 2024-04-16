import { useEffect, useState } from "react";

import Button from "../../common/Buttons/Button";
import Cards from "../../components/Cards/Cards";
import Modal from "../../components/ModalWindow/Modal";
import NewMedication from "./NewMedication ";
import Text from "../../common/Text/Text";
import { getMedications } from "../../api/Medications";
import styled from "styled-components";

const Pets = () => {
  const [medicationsData, setMedicationsData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getMedications()
      .then((response) => {
        setMedicationsData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <StyledHeader>
        <Text level={1}>Pet List</Text>
        <Button $danger onClick={handleModalOpen}>
          Add Medication
        </Button>
      </StyledHeader>
      <StyledCardsContainer>
        {medicationsData ? (
          medicationsData.map((medications) => (
            <StyledCard key={medications.id}>
              <Text level={3}>{medications.name}</Text>
              <Text level={3}>{medications.description}</Text>
              <Text level={3}>{medications.date}</Text>
            </StyledCard>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </StyledCardsContainer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <NewMedication onClose={handleModalClose} />
      </Modal>
    </div>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
`;

const StyledCard = styled(Cards)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export default Pets;
