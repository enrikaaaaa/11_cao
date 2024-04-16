import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: transparent;
  color: black;
  text-align: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>Copyright © VetBee 2024. All rights reserved</StyledFooter>
  );
};

export default Footer;
