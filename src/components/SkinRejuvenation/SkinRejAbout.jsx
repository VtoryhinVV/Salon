import { Container } from '../shared/Container';
import {
  SkinRejAboutInfo,
  SkinRejAboutSect,
  VideoCont,
} from './SkinRejAbout.styled';

import Poster from '/src/assets/img/SkinRejuvenation.jpg';
import Video from '/src/assets/video/SkinRejuvenation.MOV';

export const SkinRejAbout = () => {
  return (
    <SkinRejAboutSect>
      <Container>
        <SkinRejAboutInfo
          data-aos="fade-right"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>What is skin rejuvenation?</h2>
          <ul>
            <li>
              As we age, collagen and elastin production in our bodies decrease,
              the skin ability to repair itself as effectively as when we were
              younger also deceases.
            </li>
            <li>
              In fact, recent studies have revealed that our bodies production
              of collagen drastically decrease at the age of 30, and stops
              completely by age 50. This results in sagging skin (or crepey
              skin), the deepening of lines, and skin that appears tired and
              dull. Skin rejuvenation techniques use the latest science to
              prevent and reduce the signs of ageing or slow down the process.
              It essentially steps up where nature begins to slow down, by
              restoring health and vitality to our skin.
            </li>

            <li>
              While some people chose dermal fillers to correct imperfections,
              the truth is, one treatment alone will not achieve maximum
              results.
            </li>

            <li>
              A holistic approach to skin care, combining dermal fillers and
              other skin rejuvenation treatments, is what’s required for best
              results.
            </li>

            <li>
              After a thorough research in a lot of skin rejuvenation
              treatments, At Aesthetica clinic we chose 2 most effective
              treatments that the improve appearance and quality of the skin.
            </li>
          </ul>
        </SkinRejAboutInfo>
        <VideoCont
          data-aos="fade-left"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <video controls poster={Poster}>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoCont>
      </Container>
    </SkinRejAboutSect>
  );
};
