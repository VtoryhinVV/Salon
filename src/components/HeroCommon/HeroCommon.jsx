import {HeroSection,
        HeroTitle,
        HeroText,
        HeroLink } from "./HeroCommon.styled"
import { Container } from "../shared/Container"

export const HeroCommon = ({title, text, buttonText}) => {
    return <HeroSection>
        <Container>
            <HeroTitle>{title}</HeroTitle>
            <HeroText>{text}</HeroText>
            <HeroLink href="https://bookings.gettimely.com/aesthetica7/book" 
                target="_blank" 
                rel="noreferrer">
                    {buttonText}
            </HeroLink>
        </Container>
    </HeroSection>
}