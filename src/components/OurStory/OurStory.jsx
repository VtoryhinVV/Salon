import { Container } from '../shared/Container';
import {
  LinkTo,
  OurStiryLink,
  OurStoryContent,
  OurStoryImg,
  SectionStory,
  SocLink,
  SocLinks,
} from './OurStory.styled';

import svgImgs from '/symbol-defs.svg';
import Rectangle557 from '/img/Rectangle557.jpg';
import MobRectangle557 from '/img/mob/Rectangle557.jpg';
import Rectangle558 from '/img/Rectangle558.jpg';
import MobRectangle558 from '/img/mob/Rectangle558.jpg';
import Rectangle559 from '/img/Rectangle559.jpg';
import MobRectangle559 from '/img/mob/Rectangle559.jpg';

export function OurStory() {
  return (
    <SectionStory>
      <Container>
        <OurStoryContent
          data-aos="fade-right"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>Our story</h2>
          <p>
            At Aesthetica Clinic, our team of highly experienced professionals
            are experts in the field of cosmetic injectables. With a deep
            commitment to the art of natural enhancement, we aim to nurture
            confidence and boost self-esteem in all our clients. Our approach is
            centered around actively listening to each individual&apos;s
            specific needs, enabling us to create personalized treatment plans
            that not only enhance their appearance but also provide a sense of
            self-reassurance.
          </p>
          <OurStiryLink>
            <LinkTo to="/about_us">Read more</LinkTo>
            <SocLinks>
              <SocLink
                href="https://www.instagram.com/aesthetica_by_anna/"
                target="_blank"
              >
                <svg>
                  <use href={`${svgImgs}#icon-instagram`}></use>
                </svg>
              </SocLink>
              <SocLink
                href="https://m.facebook.com/Aestheticabyanna/"
                target="_blank"
              >
                <svg>
                  <use href={`${svgImgs}#icon-facebook`}></use>
                </svg>
              </SocLink>
            </SocLinks>
          </OurStiryLink>
        </OurStoryContent>
        <OurStoryImg
          data-aos="fade-left"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <picture>
            <source
              srcSet={Rectangle557}
              media="(min-width: 1200px)"
              width="250"
              height="474"
              alt=""
            />
            <img src={MobRectangle557} width="116" height="224" alt="" />
          </picture>
          <picture>
            <source
              srcSet={Rectangle558}
              media="(min-width: 1200px)"
              width="250"
              height="524"
              alt=""
            />
            <img src={MobRectangle558} width="116" height="247" alt="" />
          </picture>
          <picture>
            <source
              srcSet={Rectangle559}
              media="(min-width: 1200px)"
              width="250"
              height="474"
              alt=""
            />
            <img src={MobRectangle559} width="116" height="224" alt="" />
          </picture>
        </OurStoryImg>
      </Container>
    </SectionStory>
  );
}
