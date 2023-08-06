import { HeroSection, Container, List } from "./Hero.styled";

import phone from "/img/phone-mobile.png";
import chatBubble from "/img/chat-bubble.png";
import globe from "/img/globe.png";

export const Hero = () => {
    return <>
        <HeroSection>
            <Container>
                <List>
                    <li>
                        <img src={phone} alt="phone" />
                        <a href="tel:+6421581907">+6421581907</a>
                    </li>
                    <li>
                        <img src={chatBubble} alt="chatBubble" />
                        <a href="mail:anna@aesthetica.co.nz">anna@aesthetica.co.nz</a>
                    </li>
                    <li>
                        <img src={globe} alt="globe" />
                        <p>41 Raranga Street, Marshland, Christchurch 8083, New Zealand</p>
                    </li>
                </List>

                <h1>The big story behind, our beautyness clinic</h1>
                <p>Short story about us</p>
                <button>Book appoinment</button>
            </Container>
        </HeroSection>
    </>
}