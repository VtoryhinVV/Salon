import { Container } from "../shared/Container";
import {
  LinkTo,
  OurStiryLink,
  OurStoryContent,
  OurStoryImg,
  SectionStory,
  SocLink,
} from "./OurStory.styled";

import svgImgs from "/symbol-defs.svg";
import Rectangle557 from "/img/Rectangle557.jpg";
import Rectangle558 from "/img/Rectangle558.jpg";
import Rectangle559 from "/img/Rectangle559.jpg";

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
            <SocLink href="#">
              <svg>
                <use href={`${svgImgs}#icon-instagram`}></use>
              </svg>
            </SocLink>
            <SocLink href="#">
              <svg>
                <use href={`${svgImgs}#icon-facebook`}></use>
              </svg>
            </SocLink>
          </OurStiryLink>
        </OurStoryContent>
        <OurStoryImg>
          <img src={Rectangle557} />
          <img src={Rectangle558} />
          <img src={Rectangle559} />
        </OurStoryImg>
      </Container>
    </SectionStory>
  );
}
