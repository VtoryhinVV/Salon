import { Container } from '../shared/Container';
import {
  MembershipOptionsImg,
  MembershipOptionsInfo,
  MembershipOptionsSect,
} from './MembershipOptionssttyle';

import Options1 from '/src/assets/img/Options1.jpg';
import Options1Mob from '/src/assets/img/Options1Mob.jpg';
import Options2 from '/src/assets/img/Options2.jpg';
import Options2Mob from '/src/assets/img/Options2Mob.jpg';

export const MembershipOptions = () => {
  const info = [
    {
      name: 'One anti-wrinkle treatment area',
      link: 'https://live.payleadr.com/customer/showPlanTemplate/9b823970-992a-4427-8621-487856389510',
    },
    {
      name: 'Two anti-wrinkle treatment areas',
      link: 'https://live.payleadr.com/customer/showPlanTemplate/21fbe4b5-0817-4761-afd9-cc090f7a4004',
    },
    {
      name: 'Three anti-wrinkle treatment areas',
      link: 'https://live.payleadr.com/customer/showPlanTemplate/55fe392d-48e1-41b2-8ba9-dbdc6e33ca95',
    },
  ];
  return (
    <MembershipOptionsSect>
      <Container>
        <MembershipOptionsImg
          data-aos="fade-right"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <picture>
            <source
              srcSet={Options1}
              media="(min-width: 1200px)"
              width="324"
              height="615"
              alt=""
            />

            <img src={Options1Mob} width="181" height="351" alt="" />
          </picture>
          <picture>
            <source
              srcSet={Options2}
              media="(min-width: 1200px)"
              width="324"
              height="665"
              alt=""
            />
            <img src={Options2Mob} width="181" height="380" alt="" />
          </picture>
        </MembershipOptionsImg>
        <MembershipOptionsInfo
          data-aos="fade-left"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>Membership Options</h2>
          <ul>
            {info.map((inf, index) => (
              <li key={index}>
                <p>{inf.name}</p>
                <a href={inf.link}>Join now</a>
              </li>
            ))}
          </ul>
        </MembershipOptionsInfo>
      </Container>
    </MembershipOptionsSect>
  );
};
