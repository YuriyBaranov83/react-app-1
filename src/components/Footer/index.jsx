import styled from "styled-components";
import Container from "../Container";
import FooterLinks from "../FooterLinks";
import FooterInfo from "../FooterInfo";


const StyledFooter = styled.footer`
    background: #D90000;
    padding-top: 2.5rem;
    padding-bottom: 1.25rem;
    & > div {
        display: flex;
        justify-content: space-between;
    }
`

function Footer () {
    return(
        <StyledFooter>
            <Container>
                <FooterLinks/>
                <FooterInfo/>
            </Container>
        </StyledFooter>
    )
}

export default Footer;