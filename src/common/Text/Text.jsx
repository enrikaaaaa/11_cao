import styled, { css } from "styled-components";

const Text = styled.h1`
  font-size: ${(props) => props.fontSize || "24px"};
  color: ${(props) => props.color || "black"};
  ${(props) =>
    props.level &&
    css`
      font-size: ${props.level === 1
        ? "32px"
        : props.level === 2
        ? "24px"
        : props.level === 3
        ? "20pz"
        : "24px"};
      justify-content: ${props.level === 1 ? "felx-start" : "center"};
      display: flex;
      padding: 10px;
    `}
`;

export default Text;
