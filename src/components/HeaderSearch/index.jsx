import styled from "styled-components";
import logoSearch from "../../images/search.svg";

const StyledHeaderSearch = styled.div`
  position: relative;
  max-width: 19.8125rem;
  font-size: 1rem;
  input {
    border-radius: 1rem;
    border: 0.0625rem solid #e1e1e1;
    background: #fff;
    padding: .8125rem 0.9375rem;
    width: 100%;
  }
  img {
    position: absolute;
    top: 50%;
    right: .9375rem;
    transform: translateY(-50%);
  }
`;

function HeaderSearch() {
  return (
    <StyledHeaderSearch>
      <input type="input" placeholder="Почати пошук" />
      <img src={logoSearch} />
    </StyledHeaderSearch>
  );
}

export default HeaderSearch;
