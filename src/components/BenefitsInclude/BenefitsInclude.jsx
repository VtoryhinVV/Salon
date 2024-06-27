import { BenefitsComponent } from '../BenefitsComponent/BenefitsComponent';
import { BenefitsGallery } from '../BenefitsGallery/BenefitsGallery';
import { Container } from '../shared/Container';
import { useMediaQuery } from 'react-responsive';
import {
  AppoinmentBtn,
  BenefitsList,
  BenefitsTitle,
  BenefitsSection,
  AppoinmentBtnCont,
} from './BenefitsInclude.styled';

export const BenefitsInclude = ({
  benefits,
  three = false,
  gift = false,
  bgImg = false,
  title = 'Why Сhoose Our Gift Vouchers',
  btn = 'BUY GIFT VOUCHER',
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
          {gift ? title : 'Benefits Include'}
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
        <AppoinmentBtnCont>
          <AppoinmentBtn
            href="https://bookings.gettimely.com/aesthetica7/book"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            {gift ? btn : 'Book appointment'}
          </AppoinmentBtn>
        </AppoinmentBtnCont>
      </Container>
    </BenefitsSection>
  );
};
