import {
    DiscoverSection,
    DiscoverImgContainer,
    DiscoverTextContainer,
    DiscoverTitle,
    } from './Discover.styled';
import { Container } from '../shared/Container';

import Discover1 from '/src/assets/img/Discover1.jpg';
import Discover2 from '/src/assets/img/Discover2.jpg';
import DiscoverMob1 from '/src/assets/img/DiscoverMob1.jpg';
import DiscoverMob2 from '/src/assets/img/DiscoverMob2.jpg';

export const Discover = () => {
    return (
    <DiscoverSection>
        <Container>
            <DiscoverTextContainer>
                <DiscoverTitle>
                        Discover The Gift Of Beauty & Confidence
                </DiscoverTitle>
                <p>Give the gift that will leave a lasting impression and make your loved ones feel truly special.</p>
            </DiscoverTextContainer>
            <DiscoverImgContainer>
                <picture>
                    <source srcSet={Discover1} media="(min-width: 768px)" />
                    <img src={DiscoverMob1} />
                </picture>
                <picture>
                    <source srcSet={Discover2} media="(min-width: 768px)" />
                    <img src={DiscoverMob2} />
                </picture>
            </DiscoverImgContainer>
        </Container>
    </DiscoverSection>
    );
};
