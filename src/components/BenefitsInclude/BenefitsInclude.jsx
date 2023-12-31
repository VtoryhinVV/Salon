import { BenefitsComponent } from '../BenefitsComponent/BenefitsComponent';
import { BenefitsGallery } from '../BenefitsGallery/BenefitsGallery';
import { Container } from '../shared/Container';
import { useMediaQuery } from 'react-responsive';
import {
  AppoinmentBtn,
  BenefitsList,
  BenefitsTitle,
  BenefitsSection,
} from './BenefitsInclude.styled';

export const BenefitsInclude = ({
  benefits,
  three = false,
  gift = false,
  bgImg = false,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <BenefitsSection bg={bgImg}>
      <Container>
        <BenefitsTitle
          data-aos="fade-down"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          {gift ? 'Why choose Our Gift vouchers' : 'Benefits include'}
        </BenefitsTitle>
        <div data-aos="fade-up" data-aos-mirror="false" data-aos-once="true">
          {isMobile ? (
            <BenefitsGallery infos={benefits} />
          ) : (
            <BenefitsList widthItem={three}>
              {benefits.map((info, index) => (
                <BenefitsComponent
                  key={index}
                  svgName={info.svgName}
                  title={info.title}
                  descr={info.descr}
                />
              ))}
            </BenefitsList>
          )}
        </div>

        <AppoinmentBtn
          href="https://bookings.gettimely.com/aesthetica7/book"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          {gift ? 'BUY GIFT VOUCHER' : 'Book appoinment'}
        </AppoinmentBtn>
      </Container>
    </BenefitsSection>
  );
};
