import { useEffect, useState } from "react";

import Button from "../../common/Buttons/Button";
import Cards from "../../components/Cards/Cards";
import Modal from "../../components/ModalWindow/Modal";
import NewPet from "../../pages/Pets/NewPet";
import Text from "../../common/Text/Text";
import { getPets } from "../../api/Pets";
import styled from "styled-components";

const Pets = () => {
  const [petsData, setPetsData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getPets()
      .then((response) => {
        setPetsData(response);
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
          Add Pet
        </Button>
      </StyledHeader>
      <StyledCardsContainer>
        {petsData ? (
          petsData.map((pet) => (
            <StyledCard key={pet.id}>
              <Text level={3}>{pet.name}</Text>
              <Text level={3}>{pet.birthDate}</Text>
              <Text level={3}>{pet.email}</Text>
            </StyledCard>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </StyledCardsContainer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <NewPet onClose={handleModalClose} />
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
