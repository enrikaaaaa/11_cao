import { useEffect, useState } from "react";

import Button from "../../common/Buttons/Button";
import Cards from "../../components/Cards/Cards";
import Text from "../../common/Text/Text";
import { getMedications } from "../../api/Medications";
import styled from "styled-components";

const Pets = () => {
  const [medicationsData, setMedicationsData] = useState(null);

  useEffect(() => {
    getMedications()
      .then((response) => {
        setMedicationsData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <StyledHeader>
        <Text level={1}>Pet List</Text>
        <Button $danger>Add Pet</Button>
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
