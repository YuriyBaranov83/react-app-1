import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  padding: 0 20px;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
