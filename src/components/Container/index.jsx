import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 83.125rem;
  margin: 0 auto;
  padding: 0 1.25rem;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
