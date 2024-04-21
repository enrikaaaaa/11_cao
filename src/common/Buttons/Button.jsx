import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: white;
  color: orange;
  border: 1px solid orange;
  cursor: pointer;
  transition: 300ms;
  border-radius: 5px;
  width: 120px;
  height: 40px;
  &:hover {
    background: orange;
    color: white;
  }
  ${(props) =>
    props.$danger &&
    css`
      background-color: orange;
      color: white;
      border: 1px solid orange;
      &:hover {
        background: white;
        color: orange;
      }
    `}
`;

export default Button;
