import { ContantWhiteBox } from '../ContantWhiteBox/ContantWhiteBox';
import { Container } from '../shared/Container';
import {
  AppoinmentBtn,
  InfoContainer,
  ProceduresSect,
} from './Procedures.styled';

export const Procedures = ({ textInfo, bg = false }) => {
  return (
    <ProceduresSect imgBg={bg}>
      <Container>
        <InfoContainer>
          {textInfo.map((info, index) => (
            <ContantWhiteBox key={index} title={info.title} text={info.text} />
          ))}
        </InfoContainer>
        <AppoinmentBtn
          href="https://bookings.gettimely.com/aesthetica7/book"
          target="_blank"
          rel="noreferrer"
        >
          Book appoinment
        </AppoinmentBtn>
      </Container>
    </ProceduresSect>
  );
};
