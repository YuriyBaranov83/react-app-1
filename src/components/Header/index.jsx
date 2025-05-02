import styled from "styled-components";
import Container from "../Container";
import HeaderTop from "../HeaderTop";
import HeaderMiddle from "../HeaderMiddle";

const StyledHeader = styled.header``;

function Header() {
  return (
    <StyledHeader>
      <HeaderTop />
      <Container>
        <HeaderMiddle />
      </Container>
    </StyledHeader>
  );
}

export default Header;
