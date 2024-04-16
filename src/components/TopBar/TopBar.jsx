import Image from "../Image/Image";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import PropTypes from "prop-types";
import logo from "../../assets/pictures/logo.jpeg";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const TopBar = () => {
  return (
    <StyledHeader>
      <ImageContainer>
        <Link to="/">
          <StyledImage src={logo} alt="logo" />
        </Link>
      </ImageContainer>
      <Navigation />
    </StyledHeader>
  );
};

const ImageContainer = styled.div`
  width: auto;
  height: 50px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25%;
  margin-left: 20px;
`;

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
};

export default TopBar;
