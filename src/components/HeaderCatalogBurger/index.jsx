import React, { useState } from "react";
import styled from "styled-components";
import logoBurger from "../../images/logo-burger.svg";
import logoClose from "../../images/logo-close.svg";

const StyledHeaderCatalogBurger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.5rem;
  border-radius: 1.875rem;
  background: #f00;
  width: fit-content;
  padding: 0.8125rem 1.25rem;
  cursor: pointer;
  span {
    color: #fff;
    font-size: 1rem;
    font-weight: 800;
  }
  img {
    width: 1.625rem;
    height: 1.625rem;
  }
`;
function HeaderCatalogBurger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledHeaderCatalogBurger onClick={handleClick}>
      <img src={isOpen ? logoClose : logoBurger} alt="Burger" />
      <span>Каталог</span>
    </StyledHeaderCatalogBurger>
  );
}

export default HeaderCatalogBurger;
