import styled from "styled-components";
import Container from "../Container";
import HeaderTop from "../HeaderTop";
import HeaderMiddle from "../HeaderMiddle";
import HeaderBottom from "../HeaderBottom";

const StyledHeader = styled.header``;

function Header() {
  return (
    <StyledHeader>
      <HeaderTop />
      <Container>
        <HeaderMiddle />
        <HeaderBottom />
      </Container>
    </StyledHeader>
  );
}

export default Header;
