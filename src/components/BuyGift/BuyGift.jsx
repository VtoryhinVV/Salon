import { BuyGiftSection, BuyGiftImgContainer, BuyGiftTextContainer, BuyGiftTitle, BuyGiftButton } from "./BuyGift.styled"
import { Container } from "../shared/Container"

import BuyGift1 from "/img/BuyGift1.jpg"
import BuyGift2 from "/img/BuyGift2.jpg"

export const BuyGift = () => {
    return <BuyGiftSection>
        <Container>
            <BuyGiftImgContainer>
                <img src={BuyGift1} alt="" height={474} />
                <img src={BuyGift2} alt="" height={524} />
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