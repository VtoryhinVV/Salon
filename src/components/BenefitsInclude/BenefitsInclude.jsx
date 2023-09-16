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

export const BenefitsInclude = ({ benefits, three = false, gift = false }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <BenefitsSection>
      <Container>
        <BenefitsTitle>
          {gift ? 'Why choose Our Gift vouchers' : 'Benefits include'}
        </BenefitsTitle>
        {isMobile ? (
          // Версия для мобильных устройств с галереей
          <BenefitsGallery infos={benefits} />
        ) : (
          // Версия для компьютеров с 6 статичными картинками
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

        <AppoinmentBtn
          href="https://bookings.gettimely.com/aesthetica7/book"
          target="_blank"
          rel="noreferrer"
        >
          Book appoinment
        </AppoinmentBtn>
      </Container>
    </BenefitsSection>
  );
};
