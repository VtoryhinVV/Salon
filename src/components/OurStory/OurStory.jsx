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
        <OurStoryContent>
          <h2>Our story</h2>
          <p>
            With a focus on cosmetic injectables, our team also has expertise in
            beauty therapy, laser technology, and skin specialization, enabling
            us to provide comprehensive services that address skin concerns, the
            aging process, and beautification. We are dedicated to natural
            enhancement, actively listening to our clients&apos; unique needs
            and striving to improve their confidence and self-esteem.
          </p>
          <OurStiryLink>
            <LinkTo to="/about_us">Read more</LinkTo>
            <SocLinks>
              <SocLink href="https://www.instagram.com/aesthetica_by_anna/" target="_blank" >
                <svg>
                  <use href={`${svgImgs}#icon-instagram`}></use>
                </svg>
              </SocLink>
              <SocLink href="https://m.facebook.com/Aestheticabyanna/" target="_blank" >
                <svg>
                  <use href={`${svgImgs}#icon-facebook`}></use>
                </svg>
              </SocLink>
            </SocLinks>
          </OurStiryLink>
        </OurStoryContent>
        <OurStoryImg>
          <picture>
            <source srcSet={Rectangle557} media="(min-width: 1200px)" />
            <img src={MobRectangle557} />
          </picture>
          <picture>
            <source srcSet={Rectangle558} media="(min-width: 1200px)" />
            <img src={MobRectangle558} />
          </picture>
          <picture>
            <source srcSet={Rectangle559} media="(min-width: 1200px)" />
            <img src={MobRectangle559} />
          </picture>
        </OurStoryImg>
      </Container>
    </SectionStory>
  );
}
