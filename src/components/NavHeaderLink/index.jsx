import styled from "styled-components";

const StyledNavHeaderLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 0.9375rem;
  text-decoration: none;
  gap: .3125rem;
`;

function NavHeaderLink({ href, src, alt, text }) {
  return (
    <StyledNavHeaderLink href={href}>
      <img src={src} alt={alt} />
      <span>{text}</span>
    </StyledNavHeaderLink>
  );
}

export default NavHeaderLink;
