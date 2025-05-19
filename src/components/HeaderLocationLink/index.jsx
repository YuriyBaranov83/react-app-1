import styled from "styled-components";
import logoCompass from "../../images/icons/logo-compass.svg";

const StyledHeaderLocationButton = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: aliceblue;
`;
const LocationIcon = styled.span`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;

const CityName = styled.span`
  font-weight: bold;
`;

const LocationBlock = styled.div`
  display: flex;
  background: rgba(255, 169, 0, 0.7);
  border-radius: 1rem 0rem 0rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 3rem;
  padding: 0 .9375rem;

`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 1rem 1rem 0px;
  background: #ffa900;
  height: 3rem;
  padding: 0 .9375rem;
  justify-content: center;
  span:first-child {
    font-size: 0.875rem;
    color: #fff;
  }

  span:last-child {
    font-weight: 700;
    color: #fff;
    font-size: 1rem;
  }
`;
function HeaderLocationButton() {
  return (
    <StyledHeaderLocationButton href="#">
      <LocationBlock>
        <LocationIcon>
          <img src={logoCompass} alt="logo Compass" />
        </LocationIcon>
        <CityName>КИЇВ</CityName>
      </LocationBlock>
      <InfoBlock>
        <span>Виберіть спосіб отримання</span>
        <span>Доставка чи самовивіз</span>
      </InfoBlock>
    </StyledHeaderLocationButton>
  );
}

export default HeaderLocationButton;
