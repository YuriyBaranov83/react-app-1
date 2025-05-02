import styled from "styled-components";
import HeaderLocationButton from "../HeaderLocationButton";
import HeaderHeart from "../HeaderHeart";
import HeaderProfile from "../HeaderProfile";
import HeaderBasket from "../HeaderBasket";

const StyledHeaderRightBlock = styled.div`
display: flex;
align-items: center;
gap: .875rem;
`;
function HeaderRightBlock() {
  return (
    <StyledHeaderRightBlock>
      <HeaderLocationButton />
      <HeaderHeart />
      <HeaderProfile />
      <HeaderBasket />
    </StyledHeaderRightBlock>
  );
}

export default HeaderRightBlock;
