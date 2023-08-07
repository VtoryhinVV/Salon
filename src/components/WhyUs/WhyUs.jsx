import { WhyUsSection, ImgContainer, TextContainer, WhyUsText, FlexText, StyledText } from "./WhyUs.styled"
import { Container } from "../shared/Container"
import WhyUs1 from "/img/WhyUs1.jpg"
import WhyUs2 from "/img/WhyUs2.jpg"
import WhyUs3 from "/img/WhyUs3.jpg"

export const WhyUs = () => {
    return <WhyUsSection>
        <Container>
            <ImgContainer>
                <img src={WhyUs1} alt="" width={250} height={474} />
                <img src={WhyUs2} alt="" width={250} />
                <img src={WhyUs3} alt="" width={250} height={474} />
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