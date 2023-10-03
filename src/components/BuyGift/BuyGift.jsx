import {
  BuyGiftSection,
  BuyGiftImgContainer,
  BuyGiftTextContainer,
  BuyGiftTitle,
  BuyGiftButton,
} from './BuyGift.styled';
import { Container } from '../shared/Container';

import BuyGift1 from '/src/assets/img/BuyGift1.jpg';
import BuyGift2 from '/src/assets/img/BuyGift2.jpg';
import BuyGiftMob1 from '/src/assets/img/BuyGiftMob1.jpg';
import BuyGiftMob2 from '/src/assets/img/BuyGiftMob2.jpg';

export const BuyGift = ({ back = false }) => {
  return (
    <BuyGiftSection bg={back}>
      <Container>
        <BuyGiftImgContainer>
          <picture>
            <source
              srcSet={BuyGift1}
              media="(min-width: 1200px)"
              width="328"
              height="474"
              alt=""
            />
            <img src={BuyGiftMob1} width="182" height="264" alt="" />
          </picture>
          <picture>
            <source
              srcSet={BuyGift2}
              media="(min-width: 1200px)"
              width="328"
              height="524"
              alt=""
            />
            <img src={BuyGiftMob2} width="172" height="291" alt="" />
          </picture>
        </BuyGiftImgContainer>
        <BuyGiftTextContainer>
          <BuyGiftTitle>
            Spread The Love With Aesthetica Clinic Gift Vouchers
          </BuyGiftTitle>
          <p>Treat your loved one with a perfect gift for any occasion.</p>
          <BuyGiftButton
            href="https://bookings.gettimely.com/aesthetica7/purchase?uri=https%3A%2F%2Fbook.gettimely.com%2FGiftVoucher%2FDetails%2F193820%3FisMobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
            target="_blank"
            rel="noreferrer"
          >
            BUY GIFT VOUCHER
          </BuyGiftButton>
        </BuyGiftTextContainer>
      </Container>
    </BuyGiftSection>
  );
};
