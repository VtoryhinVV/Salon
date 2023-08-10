import { BuyGiftSection, BuyGiftImgContainer, BuyGiftTextContainer, BuyGiftTitle, BuyGiftButton } from "./BuyGift.styled"
import { Container } from "../shared/Container"

import BuyGift1 from "/img/BuyGift1.jpg"
import BuyGift2 from "/img/BuyGift2.jpg"
import BuyGiftMob1 from "/img/BuyGiftMob1.jpg"
import BuyGiftMob2 from "/img/BuyGiftMob2.jpg"

export const BuyGift = () => {
    return <BuyGiftSection>
        <Container>
            <BuyGiftImgContainer>
                <picture>
                    <source srcSet={BuyGift1} media="(min-width: 1200px)" />
                    <img src={BuyGiftMob1} />
                </picture><picture>
                    <source srcSet={BuyGift2} media="(min-width: 1200px)" />
                    <img src={BuyGiftMob2} />
                </picture>
            </BuyGiftImgContainer>
            <BuyGiftTextContainer>
                <BuyGiftTitle>
                    <span>Spread The Love With</span>
                    <span>Aesthetica Clinic Gift Vouchers</span>
                </BuyGiftTitle>
                <p>Treat your loved one with a perfect gift for any occasion.</p>
                <BuyGiftButton to="/a">BUY GIFT VOUCHER</BuyGiftButton>
            </BuyGiftTextContainer>
        </Container>
    </BuyGiftSection>
}