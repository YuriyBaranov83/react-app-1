import styled from "styled-components";
import logoBasket from "../../images/icons/logo-basket.svg"

const StyledHeaderBasket = styled.div`
border-radius: 1rem;
background: #F00;
display: flex;
align-items: center;
justify-content: center;
gap: .75rem;
color: #fff;
height: 3rem;
font-size: 1rem;
cursor: pointer;
padding: 0 .8125rem;
`

function HeaderBasket() {
    return (
        <StyledHeaderBasket>
            <img src={logoBasket} alt="Basket" />
            <span>Корзина</span>
        </StyledHeaderBasket>
    )
}
export default HeaderBasket;