import styled from "styled-components";
import PhoneLogo from "../../images/icons/phone-footer.svg";
import CompassLogo from "../../images/icons/compass-footer.svg";
import InstLogo from "../../images/icons/inst-footer.svg";
import MailLogo from "../../images/icons/mail-footer.svg";

const FooterInfoWrapper = styled.div`
  display: flex;
`;

const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;

const Phone = styled.a`
  color: #fff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
`;

const Link = styled.a``;

function FooterInfo() {
  <FooterInfoWrapper>
    <ColumnLeft>
      <Phone href="tel:+380672227700">
        <img src={PhoneLogo} alt="Phone Logo" />
        <span>+38 (067) 222-77-00</span>
        <span>Щоденно з 09:00 до 21:00</span>
      </Phone>
      <Link href="#">
        <img src={CompassLogo} alt="Compass Logo" />
        <span>Адреси магазинів</span>
      </Link>
      <Link href="#">
        <img src={InstLogo} alt="Inst Logo" />
        <span>Слідкуйте за нами</span>
      </Link>
      <Link href="#">
        <img src={MailLogo} alt="Mail Logo" />
        <span>Зворотній зв'язок</span>
      </Link>
    </ColumnLeft>
    <ColumnRight>
    
    </ColumnRight>

  </FooterInfoWrapper>;
}

export default FooterInfo;
