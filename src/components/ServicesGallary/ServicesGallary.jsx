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
import photo1 from '/src/assets/img/InjectablesGl1.jpg';
import photo2 from '/src/assets/img/InjectablesGl2.jpg';
import photo3 from '/src/assets/img/InjectablesGl3.jpg';
import photo4 from '/src/assets/img/InjectablesGl4.jpg';

export const ServicesGallary = () => {
  const imgGallary = { img1: photo1, img2: photo2, img3: photo3, img4: photo4 };

  const isMobile = useMediaQuery({ maxWidth: 1200 });
  return (
    <ServicesGallarySection>
      <Container>
        <ServicesGallaryTitle>Before and After</ServicesGallaryTitle>
        {isMobile ? (
          // Версия для мобильных устройств с галереей
          <GalleryComponent gallary={imgGallary} />
        ) : (
          // Версия для компьютеров с 6 статичными картинками
          <StaticImagesComponent gallary={imgGallary} />
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
