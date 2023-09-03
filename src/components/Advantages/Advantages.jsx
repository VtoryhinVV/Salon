import { Container } from "../shared/Container"
import {AdvantagesSection,
        AdvantagesTitle,
        AdvantagesList,
        AdvantagesListItem,
        AdvantagesLink } from "./Advantages.styled"

import svgImgs from '/src/assets/svg/symbol-defs.svg';

export const Advantages = () => {
    return <AdvantagesSection>
        <Container>
            <AdvantagesTitle>The Work Values We Thrive For</AdvantagesTitle>
            <AdvantagesList>
                <AdvantagesListItem>
                    <svg>
                        <use href={`${svgImgs}#icon-hand-thumb-up`}></use>
                    </svg>
                    <h3>Excellence</h3>
                    <p>We strive for excellence in every aspect of our services, ensuring that our clients receive the highest quality injectables and treatments.</p>
                </AdvantagesListItem>
                <AdvantagesListItem>
                    <svg>
                        <use href={`${svgImgs}#icon-lock-closed`}></use>
                    </svg>
                    <h3>Safety</h3>
                    <p>Your safety is our top priority. We strictly adhere to medical guidelines and use only FDA-approved products, providing you with peace of mind during your treatment. </p>
                </AdvantagesListItem>
                <AdvantagesListItem>
                    <svg>
                        <use href={`${svgImgs}#icon-trophy`}></use>
                    </svg>
                    <h3>Professionalism</h3>
                    <p>Our team of skilled professionals is dedicated to providing a professional and comfortable environment, ensuring that you feel at ease throughout your visit.</p>
                </AdvantagesListItem>
                <AdvantagesListItem>
                    <svg>
                        <use href={`${svgImgs}#icon-square-stack`}></use>
                    </svg>
                    <h3>Customization</h3>
                    <p>We understand that each client has unique needs and goals. Our personalized approach allows us to tailor treatments to your specific requirements, delivering optimal results.</p>
                </AdvantagesListItem>
                <AdvantagesListItem>
                    <svg>
                        <use href={`${svgImgs}#icon-squares`}></use>
                    </svg>
                    <h3>Integrity</h3>
                    <p>We maintain the highest level of integrity and transparency in all our interactions. We provide honest assessments and recommendations to help you make informed decisions about your injectable treatments.</p>
                </AdvantagesListItem>
                <AdvantagesListItem>
                    <svg>
                        <use href={`${svgImgs}#icon-academic-cap`}></use>
                    </svg>
                    <h3>Education</h3>
                    <p>We believe in empowering our clients with knowledge and information. We provide educational resources and consultations to help you make informed decisions about your injectable treatments.</p>
                </AdvantagesListItem>
                <AdvantagesListItem>
                    <svg>
                        <use href={`${svgImgs}#icon-heart`}></use>
                    </svg>
                    <h3>Compassion</h3>
                    <p>We understand that seeking aesthetic enhancements can be a personal journey. We approach each client with empathy, compassion, and respect, ensuring a supportive and nurturing environment.</p>
                </AdvantagesListItem>
                <AdvantagesListItem>
                    <svg>
                        <use href={`${svgImgs}#icon-clock`}></use>
                    </svg>
                    <h3>Long-term Relationships</h3>
                    <p>We aim to build long-lasting relationships with our clients, providing ongoing support and care. We are here to assist you not only during your initial treatment but also throughout your entire aesthetic journey.</p>
                </AdvantagesListItem>
            </AdvantagesList>
            <AdvantagesLink href="https://bookings.gettimely.com/aesthetica7/book" 
                target="_blank" 
                rel="noreferrer">
                    BOOK APPOINMENT
            </AdvantagesLink>
        </Container>
    </AdvantagesSection>
}