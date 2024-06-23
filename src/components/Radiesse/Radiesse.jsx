import { Container } from '../shared/Container';
import {
  IdealCandidates,
  IdealCandidatesInfo,
  IdealCandidatesVisual,
  RadiesseSect,
  VideoCont,
  WhatIsRadiesse,
  WhatIsRadiesseInfo,
} from './Radiesse.styled';

import Video from '/src/assets/video/Radiesse.mp4';

import RadiesseImg from '/src/assets/img/Radiesse.jpg';
import RadiesseMob from '/src/assets/img/RadiesseMob.jpg';
import Logo from '/src/assets/img/OurStoryLogo.jpg';
export const Radiesse = () => {
  return (
    <RadiesseSect>
      <Container>
        <WhatIsRadiesse>
          <WhatIsRadiesseInfo
            data-aos="fade-right"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <h2>What is Radiesse®?</h2>
            <div>
              <p>
                Discover Radiesse®, a unique and minimally invasive skin
                bio-stimulating treatment that firms and lifts the skin. This
                structural filler is composed of calcium hydroxyapatite (CaHa),
                similar to minerals found naturally within the body, ensuring
                safety and non-allergenic properties. Experience the natural and
                long-lasting results that Radiesse® offers, with over 2 years of
                longevity.
              </p>
              <p>
                Radiesse® is more than just a filler; it's a skin-revitalizing
                treatment that works by creating a scaffold system underneath
                your skin. This system improves volume and stimulates collagen
                production, allowing your body to create its own collagen in the
                months following treatment. The result is firmer, lifted skin
                with improved texture and quality.
              </p>
              <p>
                Radiesse® can be applied to various areas including the face,
                neck, hands, and décolletage.
              </p>
            </div>
          </WhatIsRadiesseInfo>
          <picture
            data-aos="fade-left"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <source
              srcSet={RadiesseImg}
              media="(min-width: 1200px)"
              width="678"
              height="665"
              alt=""
            />
            <source
              srcSet={RadiesseImg}
              media="(min-width: 768px)"
              width="478"
              height="465"
              alt=""
            />
            <img src={RadiesseMob} width="388" height="665" alt="" />
          </picture>
        </WhatIsRadiesse>
        <IdealCandidates>
          <IdealCandidatesVisual
            data-aos="fade-right"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <img src={Logo} width="324" height="665" alt="Logo" />
            <VideoCont>
              <video controls>
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoCont>
          </IdealCandidatesVisual>
          <IdealCandidatesInfo
            data-aos="fade-left"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <h2>Ideal Candidates</h2>
            <p>
              Radiesse® is most suitable for individuals over 30 years old whose
              collagen production has significantly decreased. Ideal candidates
              may have one or more of the following concerns:
            </p>
            <ul>
              <li>Sagging skin and lack of elasticity</li>
              <li>
                Visible signs of aging around the mouth area (e.g., smile lines)
              </li>
              <li>Wide pores and uneven texture</li>
              <li>Deep facial folds, sagging cheeks, and loose skin</li>
              <li>Premature signs of skin aging</li>
              <li>Visible signs of aging on the back of the hands</li>
              <li>Aged 30-65 years old</li>
            </ul>
          </IdealCandidatesInfo>
        </IdealCandidates>
      </Container>
    </RadiesseSect>
  );
};
