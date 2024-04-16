import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: white;
  color: orange;
  border: none;
  cursor: pointer;
  transition: 300ms;
  border-radius: 10px;
  width: 100px;
  &:hover {
    background: white;
    color: orange;
  }
  ${(props) =>
    props.$danger &&
    css`
      background-color: orange;
      color: white;
      border: 1px solid orange;
    `}
`;

export default Button;
