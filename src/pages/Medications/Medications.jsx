import { deleteMedication, getMedications } from "../../api/Medications";
import { useEffect, useState } from "react";

import Button from "../../common/Buttons/Button";
import Cards from "../../components/Cards/Cards";
import Modal from "../../components/ModalWindow/Modal";
import NewMedication from "./NewMedication ";
import Text from "../../common/Text/Text";
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

  const handleDelete = (id) => {
    deleteMedication(id);
    getMedications();
    window.location.reload();
  };

  return (
    <div>
      <StyledHeader>
        <Text level={1}>Medications List</Text>
        <Button $danger onClick={handleModalOpen}>
          Add Medication
        </Button>
      </StyledHeader>
      <StyledCardsContainer>
        {medicationsData ? (
          medicationsData.map((medication) => (
            <StyledCard key={medication.id}>
              <Text level={3}>{medication.name}</Text>
              <Text level={3}>{medication.description}</Text>
              <Text level={3}>{medication.date}</Text>
              <Button $danger onClick={() => handleDelete(medication.id)}>
                DELETE
              </Button>
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
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 10px;
`;

const StyledCard = styled(Cards)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: space-around;
`;

export default Pets;
