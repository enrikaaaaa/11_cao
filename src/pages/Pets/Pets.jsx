import { deletePet, getPets } from "../../api/Pets";
import { useEffect, useState } from "react";

import Button from "../../common/Buttons/Button";
import Cards from "../../components/Cards/Cards";
import { Link } from "react-router-dom";
import Modal from "../../components/ModalWindow/Modal";
import NewPet from "../../pages/Pets/NewPet";
import Text from "../../common/Text/Text";
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
  const handleDelete = (id) => {
    deletePet(id);
    getPets();
    window.location.reload();
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
              <SyledButtonsContainer>
                <Link to={`/pets/${pet.id}`}>
                  <Button $danger>VIEW LOG</Button>
                </Link>
                <Button onClick={() => handleDelete(pet.id)}>DELETE</Button>
              </SyledButtonsContainer>
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

const SyledButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

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
