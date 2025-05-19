import styled from "styled-components";
import NavHeaderLink from "../NavHeaderLink";
import LogoApple from "../../images/icons/apple.svg"

const StyledHeaderBottom = styled.div``;

function HeaderBottom() {
  return (
    <StyledHeaderBottom>
       <NavHeaderLink
        href="#"
        src={LogoApple}
        alt="Супермаркет"
        text="Супермаркет"
      />
      <NavHeaderLink />
      <NavHeaderLink />
    </StyledHeaderBottom>
  );
}

export default HeaderBottom;
