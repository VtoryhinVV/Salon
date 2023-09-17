import {
    DiscoverSection,
    DiscoverImgContainer,
    DiscoverTextContainer,
    DiscoverTitle,
    } from './Discover.styled';
import { Container } from '../shared/Container';

import BuyGift1 from '/img/BuyGift1.jpg';
import BuyGift2 from '/img/BuyGift2.jpg';
import BuyGiftMob1 from '/img/BuyGiftMob1.jpg';
import BuyGiftMob2 from '/img/BuyGiftMob2.jpg';

export const Discover = () => {
    return (
    <DiscoverSection>
        <Container>
            <DiscoverTextContainer>
                <DiscoverTitle>
                    <span>
                        Discover The Gift
                    </span>
                    <span>
                        Of Beauty & Confidence
                    </span>
                </DiscoverTitle>
                <p>Give the gift that will leave a lasting impression and make your loved ones feel truly special.</p>
            </DiscoverTextContainer>
            <DiscoverImgContainer>
                <picture>
                    <source srcSet={BuyGift1} media="(min-width: 1200px)" />
                    <img src={BuyGiftMob1} />
                </picture>
                <picture>
                    <source srcSet={BuyGift2} media="(min-width: 1200px)" />
                    <img src={BuyGiftMob2} />
                </picture>
            </DiscoverImgContainer>
        </Container>
    </DiscoverSection>
    );
};
