import { useMediaQuery } from 'react-responsive';
import { GalleryComponent } from '../GalleryComponent/GalleryComponent';
import { StaticImagesComponent } from '../StaticImagesComponent/StaticImagesComponent';
import { Container } from '../shared/Container';
import {
  ServicesGallarySection,
  ServicesGallaryTitle,
  BtnGroup,
  AppoinmentBtn,
  ToGallery,
} from './ServicesGallary.styled';

export const ServicesGallary = ({ imgGallery, bg = false }) => {
  const isMobile = useMediaQuery({ maxWidth: 1200 });
  return (
    <ServicesGallarySection bgImg={bg}>
      <Container>
        <ServicesGallaryTitle>Before and After</ServicesGallaryTitle>
        {isMobile ? (
          // Версия для мобильных устройств с галереей
          <GalleryComponent gallary={imgGallery} />
        ) : (
          // Версия для компьютеров с 6 статичными картинками
          <StaticImagesComponent gallary={imgGallery} />
        )}
        <BtnGroup>
          <AppoinmentBtn
            href="https://bookings.gettimely.com/aesthetica7/book"
            target="_blank"
            rel="noreferrer"
          >
            Book appoinment
          </AppoinmentBtn>
          <ToGallery to="/gallery">View more photos</ToGallery>
        </BtnGroup>
      </Container>
    </ServicesGallarySection>
  );
};
