import { Container } from '../shared/Container';
import { BenefitsGallery } from '../BenefitsGallery/BenefitsGallery';
import {
  AdvantagesSection,
  AdvantagesTitle,
  AdvantagesList,
  AdvantagesListItem,
  AdvantagesLink,
} from './Advantages.styled';

import svgImgs from '/src/assets/svg/symbol-defs.svg';
import { useMediaQuery } from 'react-responsive';

export const Advantages = () => {
  const infoForAdvantages = [
    {
      svgName: 'icon-hand-thumb-up',
      title: 'Excellence',
      descr:
        'We strive for excellence in every aspect of our services, ensuring that our clients receive the highest quality injectables and treatments.',
    },
    {
      svgName: 'icon-lock-closed',
      title: 'Safety',
      descr:
        'Your safety is our top priority. We strictly adhere to medical guidelines and use only FDA-approved products, providing you with peace of mind during your treatment.',
    },
    {
      svgName: 'icon-trophy',
      title: 'Professionalism',
      descr:
        'Our team of skilled professionals is dedicated to providing a professional and comfortable environment, ensuring that you feel at ease throughout your visit.',
    },
    {
      svgName: 'icon-square-stack',
      title: 'Customization',
      descr:
        'We understand that each client has unique needs and goals. Our  personalized approach allows us to tailor treatments to your specific requirements, delivering optimal results.',
    },
    {
      svgName: 'icon-squares',
      title: 'Integrity',
      descr:
        'We maintain the highest level of integrity and transparency in all  our interactions. We provide honest assessments and recommendations to help you make informed decisions about your injectable treatments.',
    },
    {
      svgName: 'icon-academic-cap',
      title: 'Education',
      descr:
        'We believe in empowering our clients with knowledge and information. We provide educational resources and consultations to help you make informed decisions about your injectable treatments.',
    },
    {
      svgName: 'icon-heart',
      title: 'Compassion',
      descr:
        'We understand that seeking aesthetic enhancements can be a personal journey. We approach each client with empathy, compassion, and respect, ensuring a supportive and nurturing environment.',
    },
    {
      svgName: 'icon-clock',
      title: 'Long-term Relationships',
      descr:
        'We aim to build long-lasting relationships with our clients,  providing ongoing support and care. We are here to assist you not  only during your initial treatment but also throughout your entire aesthetic journey.',
    },
  ];
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <AdvantagesSection>
      <Container>
        <AdvantagesTitle
          data-aos="fade-up"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          The Work Values We Thrive For
        </AdvantagesTitle>
        <div data-aos="fade-up" data-aos-mirror="false" data-aos-once="true">
          {isMobile ? (
            <BenefitsGallery infos={infoForAdvantages} />
          ) : (
            <AdvantagesList>
              <AdvantagesListItem>
                <svg>
                  <use href={`${svgImgs}#icon-hand-thumb-up`}></use>
                </svg>
                <h3>Excellence</h3>
                <p>
                  We strive for excellence in every aspect of our services,
                  ensuring that our clients receive the highest quality
                  injectables and treatments.
                </p>
              </AdvantagesListItem>
              <AdvantagesListItem>
                <svg>
                  <use href={`${svgImgs}#icon-lock-closed`}></use>
                </svg>
                <h3>Safety</h3>
                <p>
                  Your safety is our top priority. We strictly adhere to medical
                  guidelines and use only FDA-approved products, providing you
                  with peace of mind during your treatment.
                </p>
              </AdvantagesListItem>
              <AdvantagesListItem>
                <svg>
                  <use href={`${svgImgs}#icon-trophy`}></use>
                </svg>
                <h3>Professionalism</h3>
                <p>
                  Our team of skilled professionals is dedicated to providing a
                  professional and comfortable environment, ensuring that you
                  feel at ease throughout your visit.
                </p>
              </AdvantagesListItem>
              <AdvantagesListItem>
                <svg>
                  <use href={`${svgImgs}#icon-square-stack`}></use>
                </svg>
                <h3>Customization</h3>
                <p>
                  We understand that each client has unique needs and goals. Our
                  personalized approach allows us to tailor treatments to your
                  specific requirements, delivering optimal results.
                </p>
              </AdvantagesListItem>
              <AdvantagesListItem>
                <svg>
                  <use href={`${svgImgs}#icon-squares`}></use>
                </svg>
                <h3>Integrity</h3>
                <p>
                  We maintain the highest level of integrity and transparency in
                  all our interactions. We provide honest assessments and
                  recommendations to help you make informed decisions about your
                  injectable treatments.
                </p>
              </AdvantagesListItem>
              <AdvantagesListItem>
                <svg>
                  <use href={`${svgImgs}#icon-academic-cap`}></use>
                </svg>
                <h3>Education</h3>
                <p>
                  We believe in empowering our clients with knowledge and
                  information. We provide educational resources and
                  consultations to help you make informed decisions about your
                  injectable treatments.
                </p>
              </AdvantagesListItem>
              <AdvantagesListItem>
                <svg>
                  <use href={`${svgImgs}#icon-heart`}></use>
                </svg>
                <h3>Compassion</h3>
                <p>
                  We understand that seeking aesthetic enhancements can be a
                  personal journey. We approach each client with empathy,
                  compassion, and respect, ensuring a supportive and nurturing
                  environment.
                </p>
              </AdvantagesListItem>
              <AdvantagesListItem>
                <svg>
                  <use href={`${svgImgs}#icon-clock`}></use>
                </svg>
                <h3>Long-term Relationships</h3>
                <p>
                  We aim to build long-lasting relationships with our clients,
                  providing ongoing support and care. We are here to assist you
                  not only during your initial treatment but also throughout
                  your entire aesthetic journey.
                </p>
              </AdvantagesListItem>
            </AdvantagesList>
          )}
        </div>

        <AdvantagesLink
          href="https://bookings.gettimely.com/aesthetica7/book"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          BOOK APPOINMENT
        </AdvantagesLink>
      </Container>
    </AdvantagesSection>
  );
};
