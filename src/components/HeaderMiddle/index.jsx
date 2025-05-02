import styled from "styled-components";
import HeaderLogo from "../HeaderLogo";
import HeaderCatalogBurger from "../HeaderCatalogBurger";
import HeaderSearch from "../HeaderSearch";
import HeaderRightBlock from "../HeaderRightBlock";

const StyledHeaderMiddle = styled.div`
  margin-top: 1.4375rem;
  display: flex;
  align-items: center;
  gap: 1.625rem;

`;
function HeaderMiddle() {
  return (
    <StyledHeaderMiddle>
      <HeaderLogo />
      <HeaderCatalogBurger />
      <HeaderSearch />
      <HeaderRightBlock/>
    </StyledHeaderMiddle>
  );
}

export default HeaderMiddle;
