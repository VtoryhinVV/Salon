import { Container } from '../shared/Container';
import {
  IdealCandidates,
  IdealCandidatesInfo,
  IdealCandidatesVisual,
  ProfhiloSect,
  VideoCont,
  WhatIsProfhilo,
  WhatIsProfhiloInfo,
} from './Profhilo.styled';
import Video from '/src/assets/video/IdealCandidates.mp4';
import WhatIsProfhiloImg from '/src/assets/img/WhatIsProfhilo.jpg';
import WhatIsProfhiloImgMob from '/src/assets/img/WhatIsProfhiloMob.jpg';
import Logo from '/src/assets/img/OurStoryLogo.jpg';

import { useEffect, useRef } from 'react';

export const Profhilo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleUserInteraction = () => {
      if (video && video.paused) {
        video.play().catch(error => {
          console.error('Video play failed: ', error);
        });
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play().catch(error => {
              console.error('Video play failed: ', error);
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // 50% видео должно быть в поле зрения для воспроизведения
      }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return (
    <ProfhiloSect>
      <Container>
        <WhatIsProfhilo>
          <WhatIsProfhiloInfo
            data-aos="fade-right"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <h2>What is Profhilo®?</h2>
            <div>
              <p>
                Discover the revolutionary beauty treatment that’s sweeping the
                nation: Profhilo®. Say goodbye to tired, dull, and aging skin
                and hello to a luminous glow with completely natural-looking
                results.
              </p>
              <p>
                Profhilo® is not just another skincare product; it’s a wonder
                treatment designed to hydrate and rejuvenate your skin from
                within. Unlike topical moisturizers, Profhilo® contains 100%
                synthetic hyaluronic acid (HA), penetrating deeper layers to
                rehydrate and plump your skin effectively.
              </p>
              <p>
                While commonly used on the face and neck, Profhilo® can also
                rejuvenate other areas such as the décolletage, arms, knees, and
                hands.
              </p>
            </div>
          </WhatIsProfhiloInfo>
          <picture
            data-aos="fade-left"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <source
              srcSet={WhatIsProfhiloImg}
              media="(min-width: 1200px)"
              width="678"
              height="665"
              alt=""
            />
            <source
              srcSet={WhatIsProfhiloImg}
              media="(min-width: 768px)"
              width="478"
              height="465"
              alt=""
            />
            <img src={WhatIsProfhiloImgMob} width="388" height="665" alt="" />
          </picture>
        </WhatIsProfhilo>
        <IdealCandidates>
          <IdealCandidatesVisual
            data-aos="fade-right"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <img src={Logo} width="324" height="665" alt="Logo" />
            <VideoCont>
              <video controls ref={videoRef} loop muted>
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
              It is suitable for anyone 20+ years old who are wanting to
              mainatain a healthy, hydrated and glowing skin that does not
              require foundation.
            </p>
            <p>Ideal candidate has one or more of the following:</p>
            <ul>
              <li>Dehydrated skin</li>
              <li>Dull skin</li>
              <li>Uneven skin texture</li>
              <li>Fine lines and wrinkles</li>
              <li>Experiencing signs of ageing</li>
              <li>Sun damaged skin</li>
            </ul>
            <p>
              To achieve optimum results, we recommend two initial sessions
              spaced four weeks apart. Afterward, maintenance sessions every 6-8
              months will help you maintain your radiant complexion.
            </p>
          </IdealCandidatesInfo>
        </IdealCandidates>
      </Container>
    </ProfhiloSect>
  );
};
