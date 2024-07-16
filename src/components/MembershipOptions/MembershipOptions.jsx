import { Container } from '../shared/Container';
import {
  MembershipOptionsInfo,
  MembershipOptionsSect,
} from './MembershipOptionssttyle';

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
    <MembershipOptionsSect id="Options">
      <Container>
        <MembershipOptionsInfo
          data-aos="fade-up"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>Membership plans</h2>
          <ul>
            {info.map((inf, index) => (
              <li key={index}>
                <a href={inf.link} rel="noreferrer" target="_blank">
                  {inf.name}
                </a>
              </li>
            ))}
          </ul>
        </MembershipOptionsInfo>
      </Container>
    </MembershipOptionsSect>
  );
};
