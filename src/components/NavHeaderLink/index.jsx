import styled from "styled-components";

const StyledNavHeaderLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 0.9375rem;
  text-decoration: none;
  gap: 0.3125rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 169, 0, 0.45);
  background: #fff8eb;
  transition: background 0.3s ease;
  color: #0a0a0a;
  &:hover {
    background: #ffe8bc;
  }
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
