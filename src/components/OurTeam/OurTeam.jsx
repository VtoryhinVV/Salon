import { Container } from '../shared/Container';
import {
  OurTeamSection,
  OurTeamTitle,
  OurTeamList,
  OurTeamListItemTextContainer,
  OurTeamListItemTitle,
  OurTeamListItemText,
  OurTeamImg,
} from './OurTeam.styled';

import Anna from '/src/assets/img/Anna.jpg';
import AnnaMob from '/src/assets/img/AnnaMob.jpg';
import Georgie from '/src/assets/img/Georgie.jpg';
import GeorgieMob from '/src/assets/img/GeorgieMob.jpg';

export const OurTeam = () => {
  return (
    <OurTeamSection>
      <Container>
        <OurTeamTitle data-aos="fade-down">Our Team</OurTeamTitle>
        <OurTeamList>
          <li>
            <OurTeamListItemTextContainer data-aos="fade-right">
              <OurTeamListItemTitle>
                <span>Anna (Founder) -</span>
                <span>Registered Nurse</span>
              </OurTeamListItemTitle>
              <OurTeamListItemText>
                <span>
                  Anna is a highly skilled Registered Nurse with a wealth of
                  experience in surgical and practice nursing. Her expertise in
                  cosmetic injectables is complemented by her background in
                  beauty therapy, laser technology, and skin care. This diverse
                  knowledge has given her a deep understanding of skin health,
                  the aging process, and the art of beautification.
                </span>
                <span>
                  With over six years of medical appearance training and work
                  experience, Anna has developed a passion for natural
                  enhancement. She takes pride in actively listening to her
                  clients' needs and providing personalized treatments that
                  boost their confidence and self-esteem. Her exceptional
                  aesthetic eye and unwavering commitment to perfection ensure
                  that each client receives the best possible results.
                </span>
                <span>
                  Anna's professional integrity is of utmost importance to her.
                  She conducts honest and customized consultations, offering
                  genuine treatment plans that are tailored to each individual.
                  With Anna, you can trust that you will receive the highest
                  level of care and the most effective treatments for your
                  cosmetic needs.
                </span>
              </OurTeamListItemText>
            </OurTeamListItemTextContainer>
            <picture data-aos="fade-left">
              <source srcSet={Anna} media="(min-width: 1200px)" />
              <OurTeamImg src={AnnaMob} alt="Anna" />
            </picture>
          </li>
          <li>
            <OurTeamListItemTextContainer data-aos="fade-left">
              <OurTeamListItemTitle>
                <span>Georgie -</span>
                <span>Registered Nurse</span>
              </OurTeamListItemTitle>
              <OurTeamListItemText>
                <span>
                  Georgie is a senior Registered Nurse with experience in both
                  Cosmetic injectables and specialised Respiratory medicine. In
                  her nursing career she has over 6 years of experience, which
                  has allowed her to develop the communication and practical
                  skills to work alongside clients to tailor treatments
                  according to their individual needs.
                </span>
                <span>
                  Her detail orientated nature and creative passions have led
                  Georgie to pursue a career within aesthetic medicine, having
                  joined the Aesthetica team at the start of 2023, she has been
                  able to thrive, utilising these strengths to continue to build
                  on her skills in cosmetic injectables.
                </span>
                <span>
                  As an ever-growing industry, Georgie's main focus within
                  aesthetics is to work in collaboration with clients to enhance
                  their natural features, making them look and feel refreshed
                  and help to boost their confidence.
                </span>
              </OurTeamListItemText>
            </OurTeamListItemTextContainer>
            <picture data-aos="fade-right">
              <source srcSet={Georgie} media="(min-width: 1200px)" />
              <OurTeamImg src={GeorgieMob} alt="Georgie" />
            </picture>
          </li>
        </OurTeamList>
      </Container>
    </OurTeamSection>
  );
};
