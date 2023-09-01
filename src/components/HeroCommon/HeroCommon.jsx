import {HeroSection,
        HeroTitle,
        HeroText,
        HeroButton } from "./HeroCommon.styled"
import { Container } from "../shared/Container"

export const HeroCommon = ({title, text, buttonText}) => {
    return <HeroSection>
        <Container>
            <HeroTitle>{title}</HeroTitle>
            <HeroText>{text}</HeroText>
            <HeroButton>{buttonText}</HeroButton>
        </Container>
    </HeroSection>
}