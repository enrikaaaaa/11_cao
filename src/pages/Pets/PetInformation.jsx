import { useEffect, useState } from "react";

import AddPrescription from "./AddPrescription";
import Button from "../../common/Buttons/Button";
import Cards from "../../components/Cards/Cards";
import Modal from "../../components/ModalWindow/Modal";
import Text from "../../common/Text/Text";
import { getPetById } from "../../api/Pets";
import { useParams } from "react-router-dom";

const PetInformation = () => {
  const { id } = useParams();
  const [petData, setPetData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getPetById(id)
      .then((response) => {
        setPetData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Text level={2}>Pet Information</Text>
      <Button onClick={handleModalOpen}>Add Prescription</Button>

      {petData && (
        <Cards>
          <Text level={3}>Name: {petData.name}</Text>
          <Text level={3}>Birth Date: {petData.birthDate}</Text>
          <Text level={3}>Email: {petData.email}</Text>
        </Cards>
      )}

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <AddPrescription onClose={handleModalClose} />
      </Modal>
    </div>
  );
};

export default PetInformation;
