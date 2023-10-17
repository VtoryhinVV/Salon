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
