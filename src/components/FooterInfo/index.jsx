import styled from "styled-components";
import PhoneLogo from "../../images/icons/phone-footer.svg";
import CompassLogo from "../../images/icons/compass-footer.svg";
import InstLogo from "../../images/icons/inst-footer.svg";
import MailLogo from "../../images/icons/mail-footer.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FooterInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.a`
  color: #fff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 0.8125rem;
  & > span {
    margin-left: 0.625rem;
  }
  & > span:last-child {
    display: block;
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 2.1875rem;
  }
`;

const Link = styled.a`
  display: flex;
  color: #fff;
  font-size: 0.875rem;
  gap: 1.375rem;
`;

const Title = styled.div`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.0281rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 0.625rem;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledInput = styled(Field)`
  flex: 1;
  padding: 0.625rem 0.9375rem;
  border-radius: 16px;
  background: #fff;
  border: none;
  outline: none;
  max-width: 15.625rem;
`;

const StyledButton = styled.button`
  padding: 10px 0.9375rem;
  border-radius: 16px;
  border: 1px solid white;
  background: transparent;
  color: white;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  & > div {
    background: #fff;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div > span {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background-color: #f00;
  }
`;

const ErrorText = styled.div`
  color: #ffdcdc;
  font-size: 0.75rem;
`;

function FooterInfo() {
  return (
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
        <Title>Підпишіться на смачні та корисні новини</Title>
        <Formik
          initialValues={{ email: "", agreed: false }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Некоректний email")
              .required("Обовʼязкове поле"),
            agreed: Yup.boolean().oneOf([true], "Потрібно підтвердити згоду"),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log("Submitted:", values);
            resetForm();
          }}
        >
          {({ isValid, dirty }) => (
            <StyledForm>
              <Row>
                <StyledInput
                  type="email"
                  name="email"
                  placeholder="Ваш email"
                />
                <StyledButton type="submit" disabled={!(isValid && dirty)}>
                  Підписатися
                </StyledButton>
              </Row>
              <ErrorMessage name="email" component={ErrorText} />
              <Field name="agreed">
                {({ field }) => (
                  <CheckboxLabel>
                    <input
                      type="checkbox"
                      {...field}
                      style={{ display: "none" }}
                    />
                    <div>{field.value && <span />} </div>
                    <span>Згоден з політикою конфіденційності</span>
                  </CheckboxLabel>
                )}
              </Field>
              <ErrorMessage name="agreed" component={ErrorText} />
            </StyledForm>
          )}
        </Formik>
      </ColumnRight>
    </FooterInfoWrapper>
  );
}

export default FooterInfo;
