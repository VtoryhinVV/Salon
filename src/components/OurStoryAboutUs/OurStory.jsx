import { useMediaQuery } from 'react-responsive';
import { Container } from '../shared/Container';
import {
  OurStorySection,
  OurStoryInfoContainer,
  OurStoryTextContainer,
  OurStoryImgContainer,
} from './OurStory.styled';

import Logo from '/src/assets/img/OurStoryLogo.jpg';
import Video from '/src/assets/video/Injection.mp4';

export const OurStory = () => {
  const isDesctop = useMediaQuery({ minWidth: 1200 });
  return (
    <OurStorySection>
      <Container>
        <OurStoryInfoContainer>
          <h2>Our Story</h2>
          <OurStoryTextContainer>
            <span>
              Step into our boutique clinic and experience a world of comfort
              and expertise. Our carefully curated space is designed to provide
              a comfortable and inviting atmosphere, ensuring that every visit
              is a rejuvenating experience for our clients.
            </span>
            <span>
              At our clinic, the safety of our clients is our utmost priority.
              We adhere to strict protocols and maintain the highest standards
              of hygiene to create a clean and secure environment. Rest assured
              that you are in capable hands, as our team of experienced
              professionals is committed to delivering safe and effective
              treatments.
            </span>
            <span>
              To deliver exceptional results, we only use premium products to
              ensure our clients achieve the best possible outcomes. Our
              dedication to quality extends to every aspect of our services,
              from the advanced technologies we utilize to the personalized
              treatment plans we tailor to each individual client. With our
              expertise and cutting-edge techniques, we strive to achieve the
              best possible outcomes for our clients
            </span>
            <span>
              Discover the difference of our boutique clinic, where comfort, and
              your well-being are at the forefront of everything we do
            </span>
          </OurStoryTextContainer>
          <a
            href="https://bookings.gettimely.com/aesthetica7/book"
            target="_blank"
            rel="noreferrer"
          >
            BOOK APPOINMENT
          </a>
        </OurStoryInfoContainer>
        <OurStoryImgContainer>
          <video src={Video} width="324" height="615" controls />
          {isDesctop && <img src={Logo} alt="logo" />}
        </OurStoryImgContainer>
      </Container>
    </OurStorySection>
  );
};
