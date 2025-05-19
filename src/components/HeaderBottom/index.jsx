import styled from "styled-components";
import NavHeaderLink from "../NavHeaderLink";
import LogoApple from "../../images/icons/apple.svg";
import LogoPizza from "../../images/icons/pizza.svg";
import LogoFrezze from "../../images/icons/frezze.svg";
import LogoOther from "../../images/icons/other.svg";
import LogoFire from "../../images/icons/fire.svg";
import LogoLabel from "../../images/icons/label.svg";

const StyledHeaderBottom = styled.div`
  display: flex;
  gap: 0.875rem;
  margin-top: 1.25rem;
`;

function HeaderBottom() {
  return (
    <StyledHeaderBottom>
      <NavHeaderLink
        href="#"
        src={LogoApple}
        alt="Супермаркет"
        text="Супермаркет"
      />
      <NavHeaderLink
        href="#"
        src={LogoPizza}
        alt="Кулінарія"
        text="Кулінарія"
      />
      <NavHeaderLink
        href="#"
        src={LogoFrezze}
        alt="Заморозка"
        text="Заморозка"
      />
      <NavHeaderLink href="#" src={LogoOther} alt="Інше" text="Інше" />
      <NavHeaderLink href="#" src={LogoFire} alt="Акції" text="Акції" />
      <NavHeaderLink href="#" src={LogoLabel} alt="Магазини" text="Магазини" />
    </StyledHeaderBottom>
  );
}

export default HeaderBottom;
