import { Formik, Form, Field } from 'formik';

import {ContactUsSection, 
        ContactUsTitle,
        ContactUsTimetable,
        ContactUsTimetableList,
        ContactUsTimetableItem,
        ContactUsMainContent,
        ContactUsContentBox,
        ContactUsListData,
        ContactUsItemData,
        ContactUsIcon,
        ContactUsTextContainer,
        ContactUsForm,
        ContactUsLinkContainer,
        ContactUsSubmitButton,
        ContactUsSvgList,
        ContactUsSvgItem,
        ContactUsImgContainer, } from "./ContactUs.styled"
import { Container } from "../shared/Container"

import ContactUsPhoto1 from '/img/ContactUs1.jpg'
import ContactUsPhoto2 from '/img/ContactUs2.jpg'

import svgImgs from '/symbol-defs.svg';
import chatBubble from "/img/chat-bubble.png";
import globe from "/img/globe.png";
import phone from "/img/phone-mobile.png";

export const ContactUs = () => {
    return <ContactUsSection>
        <Container>
            <ContactUsTitle>
                Contact Us
            </ContactUsTitle>
            <ContactUsTimetable>
                <h3>Opening hours</h3>
                <ContactUsTimetableList>
                    <ContactUsTimetableItem>
                        <p>
                            <span>Monday / Wednesday / Friday</span>
                            <span>10:00am - 5:00pm</span>
                        </p>
                    </ContactUsTimetableItem>
                    <ContactUsTimetableItem>
                        <p>
                            <span>Tuesday / Thursday</span>
                            <span>1:00pm - 8:00pm</span>
                        </p>
                    </ContactUsTimetableItem>
                    <ContactUsTimetableItem>
                        <p>
                            <span>Saturday / Sunday</span>
                            <span>10:00am - 2:00pm</span>
                        </p>
                    </ContactUsTimetableItem>
                </ContactUsTimetableList>
            </ContactUsTimetable>
            <ContactUsMainContent>
                <ContactUsContentBox>

                    <ContactUsListData>
                        <ContactUsItemData>
                            <ContactUsIcon src={chatBubble} width={24} height={24} />
                            <ContactUsTextContainer>
                                <h3>Drop Us :</h3>
                                <p>anna@aesthetica.co.nz</p>
                            </ContactUsTextContainer>
                        </ContactUsItemData>

                        <ContactUsItemData>
                            <ContactUsIcon src={globe} width={24} height={24} />
                            <ContactUsTextContainer>
                                <h3>Visit Us :</h3>
                                <p>41 Raranga Street, Marshland, Christchurch 8083, New Zealand</p>
                            </ContactUsTextContainer>
                        </ContactUsItemData>

                        <ContactUsItemData>
                            <ContactUsIcon src={phone} width={24} height={24} />
                            <ContactUsTextContainer>
                                <h3>Call Us :</h3>
                                <p>+6421581907</p>
                            </ContactUsTextContainer>
                        </ContactUsItemData>
                    </ContactUsListData>

                    <Formik>
                        <ContactUsForm id='ContactUsForm'>
                            <Field placeholder='Enter your email' type='email' />
                            <Field placeholder='+380 XX XXX XX XX' type='tel' />
                            <Field as='textarea' placeholder='Enter your massage' rows='4' />
                        </ContactUsForm>
                    </Formik>
                    <ContactUsLinkContainer>
                        <ContactUsSubmitButton type="submit" form='ContactUsForm'>SEND MESSAGE</ContactUsSubmitButton>
                        <ContactUsSvgList>
                            <ContactUsSvgItem>
                                <svg>
                                    <use href={`${svgImgs}#icon-instagram`}></use>
                                </svg>
                            </ContactUsSvgItem>
                            <ContactUsSvgItem>
                                <svg>
                                    <use href={`${svgImgs}#icon-facebook`}></use>
                                </svg>
                            </ContactUsSvgItem>
                        </ContactUsSvgList>
                    </ContactUsLinkContainer>
                </ContactUsContentBox>
                <ContactUsImgContainer>
                    <img src={ContactUsPhoto1} height={615} />
                    <img src={ContactUsPhoto2} />
                </ContactUsImgContainer>
            </ContactUsMainContent>
        </Container>
    </ContactUsSection>
}