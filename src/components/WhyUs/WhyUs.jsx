import { WhyUsSection, ImgContainer, TextContainer, WhyUsText, FlexText, StyledText } from "./WhyUs.styled"
import { Container } from "../shared/Container"
import WhyUsDesktop1 from "/img/WhyUsDesktop1.jpg"
import WhyUsDesktop2 from "/img/WhyUsDesktop2.jpg"
import WhyUsDesktop3 from "/img/WhyUsDesktop3.jpg"
import WhyUsPhone1 from "/img/WhyUsPhone1.jpg"
import WhyUsPhone2 from "/img/WhyUsPhone2.jpg"
import WhyUsPhone3 from "/img/WhyUsPhone3.jpg"

export const WhyUs = () => {
    return <WhyUsSection>
        <Container>
            <ImgContainer>
                <picture>
                    <source srcSet={WhyUsDesktop1} media="(min-width: 1200px)" />
                    <img src={WhyUsPhone1} />
                </picture>
                <picture>
                    <source srcSet={WhyUsDesktop2} media="(min-width: 1200px)" />
                    <img src={WhyUsPhone2} />
                </picture>
                <picture>
                    <source srcSet={WhyUsDesktop3} media="(min-width: 1200px)" />
                    <img src={WhyUsPhone3} />
                </picture>
            </ImgContainer>
            <TextContainer>
                <h2>Why us?</h2>
                <p>At Aesthetica Clinic, we deliver premium results using top-quality products. Our commitment to excellence empowers clients to achieve their aesthetic goals with confidence and satisfaction.</p>
                <div>
                    <WhyUsText>
                        <div>
                            <StyledText>5+</StyledText> 
                            <FlexText>
                                <span>Years</span>
                                <span>of experience</span>
                            </FlexText>
                        </div>
                        <div>
                            <StyledText>5+</StyledText> 
                            <FlexText>
                                <span>Stars</span>
                                <span>Google review</span>
                            </FlexText>
                        </div>
                    </WhyUsText>
                    <WhyUsText>
                        <div>
                            <StyledText>3000+</StyledText> 
                            <FlexText>
                                <span>Happy</span>
                                <span>clients</span>
                            </FlexText>
                        </div>
                    </WhyUsText>
                </div>
            </TextContainer>
        </Container>
    </WhyUsSection>
}