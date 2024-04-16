import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  background-color: transparent;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 30%;
`;

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
