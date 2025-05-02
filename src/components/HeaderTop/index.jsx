import styled from "styled-components";

const StyledHeaderTop = styled.div`
  background: radial-gradient(
    221.65% 84.42% at 78.22% 32.11%,
    #f00 0%,
    #ff3103 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8125rem 0;
  column-gap: 1.4375rem;
  span {
    color: #fff;
    font-family: Nunito;
    font-size: 1.375;
    font-style: normal;
    font-weight: 900;
    line-height: 120%;
    text-transform: uppercase;
    max-width: 22.5rem;
  }
  .header__top-sale {
    color: #e90500;
    background: #ffa900;
    border-radius: 0.3125rem;
    padding: 0 0.3125rem;
  }
  .header__top-link {
    color: #fff;
    border: 0.0625rem solid #fff;
    border-radius: 1.875rem;
    padding: 0.5rem 1.25rem;
  }
`;

function HeaderTop() {
  return (
    <StyledHeaderTop>
      <span>
      Харчуйте різноманітно і накопичуйте{" "}
        <span className="header__top-sale">знижку</span> до 10%
      </span>
      <a href="" className="header__top-link">
      Отримати знижку
      </a>
    </StyledHeaderTop>
  );
}

export default HeaderTop;
