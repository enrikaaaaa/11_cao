import PropTypes from "prop-types";
import { css } from "styled-components";
import styled from "styled-components";

const Card = styled.div`
  background-color: transparent;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 20rem;
  height: 15rem;
  box-sizing: border-box;
  ${(props) =>
    props.$small &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      height: 10rem;
      width: 25rem;
      margin: 5px;
    `}
  ${(props) =>
    props.$werysmall &&
    css`
      height: 5rem;
      width: 25rem;
      margin: 5px;
    `}
`;

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
