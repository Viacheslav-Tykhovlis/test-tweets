import { Navigation } from "../Navigation/Navigation";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Navigation />
      </HeaderContainer>
    </header>
  );
};

export default Header;
