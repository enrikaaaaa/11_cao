import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: transparent;
  color: black;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 80%;
  z-index: 1000;
`;

const Footer = () => {
  return (
    <StyledFooter>Copyright © VetBee 2024. All rights reserved</StyledFooter>
  );
};

export default Footer;
