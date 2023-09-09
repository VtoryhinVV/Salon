import { ContantWhiteBox } from '../ContantWhiteBox/ContantWhiteBox';
import { Container } from '../shared/Container';
import {
  AppoinmentBtn,
  InfoContainer,
  MedicalProceduresSect,
} from './MedicalProcedures.styled';

export const MedicalProcedures = () => {
  const infoProcedures = [
    {
      title: 'Hyperhidrosis (Excessive Sweating) Treatment',
      text: 'Are you tired of dealing with embarrassing sweat stains or constantly having to reapply antiperspirants? Our medical Botox treatment for hyperhidrosis can be a game-changer. By injecting Botox into the affected areas, such as the underarms, palms, or soles, we can effectively reduce excessive sweating. The treatment works by blocking the signals that stimulate sweat glands, providing you with long-lasting dryness and confidence. Say goodbye to the discomfort and inconvenience of hyperhidrosis with our specialized Botox solution.',
    },
    {
      title: 'Teeth Grinding (Bruxism) Treatment',
      text: 'If you suffer from teeth grinding, also known as bruxism, you understand the pain and damage it can cause to your teeth and jaw. Our clinic offers Botox treatment specifically designed to address this issue. By injecting Botox into the muscles responsible for jaw movement, we can effectively reduce the intensity and frequency of teeth grinding. This not only alleviates the discomfort but also helps prevent further damage to your teeth and jaw joints. Regain control over your dental health with our specialized Botox solution for bruxism.',
    },
    {
      title: 'Botox for Headaches',
      text: 'Chronic headaches can significantly impact your quality of life, making it difficult to focus and enjoy everyday activities. Our clinic provides Botox treatments for headaches, which have been FDA-approved for the prevention of chronic migraines in adults. By targeting specific areas of the head and neck muscles, Botox injections can help reduce the frequency and severity of migraines. Our skilled professionals will create a personalized treatment plan to address your unique needs, providing you with much-needed relief and improved well-being.',
    },
    {
      title: 'Procedure and Safety',
      text: 'At Aesthetica, your safety and satisfaction are our top priorities. All our Botox treatments are performed by experienced healthcare professionals who have received specialized training in administering Botox injections. During the procedure, a series of small injections will be administered into the targeted muscles. While minimal discomfort and temporary side effects such as bruising or redness may occur, our team will ensure your comfort throughout the process. We will also provide comprehensive aftercare instructions to maximize the effectiveness of your treatment.',
    },
  ];

  return (
    <MedicalProceduresSect>
      <Container>
        <InfoContainer>
          {infoProcedures.map((info, index) => (
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
    </MedicalProceduresSect>
  );
};
