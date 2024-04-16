import { Link } from "react-router-dom";
import { navigationBarLinks } from "../../routes/consts";
import styled from "styled-components";

const NavigationContainer = styled.div`
  background-color: transparent;
  padding: 10px;
`;

const NavigationLink = styled(Link)`
  color: orange;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <nav>
        {navigationBarLinks.map((link) => (
          <NavigationLink key={link.path} to={link.path}>
            {link.title}
          </NavigationLink>
        ))}
      </nav>
    </NavigationContainer>
  );
};

export default Navigation;
