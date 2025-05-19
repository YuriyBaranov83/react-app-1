import styled from "styled-components";

const FooterLinksWrapper = styled.div`
  display: flex;
  gap: 4.0625rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: .875rem;
`;

const Title = styled.h4`
  font-weight: 700;
`;

const Link = styled.a`
  color: #fff;
  line-height: 154%;
  &:hover {
  }
`;

function FooterLinks() {
  return (
    <FooterLinksWrapper>
      <Column>
        <Title>Іллінський онлайн</Title>
        <Link href="#">Кулінарія</Link>
        <Link href="#">Супермаркет</Link>
        <Link href="#">Заморожування</Link>
        <Link href="#">Інше</Link>
      </Column>
      <Column>
        <Title>Іллінський клуб</Title>
        <Link href="#">Акції</Link>
        <Link href="#">Доставка та оплата</Link>
        <Link href="#">Програма лояльності</Link>
        <Link href="#">Політика конфіденційності</Link>
        <Link href="#">Вакансії</Link>
      </Column>
    </FooterLinksWrapper>
  );
}

export default FooterLinks;
