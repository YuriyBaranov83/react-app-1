import styled from "styled-components";
import logo from "../../images/icons/logo-header.svg"

const StyledHeaderLogo = styled.a`
    
`

function HeaderLogo () {
    return(
        <StyledHeaderLogo>
            <img src={logo} alt="Logo Header" />
        </StyledHeaderLogo>
    )
}

export default HeaderLogo;