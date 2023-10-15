import { Formik, Field } from 'formik';

import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import {
  ContactUsSection,
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
  ContactUsImgContainer,
  ErrorMessageSt,
} from './ContactUs.styled';
import { Container } from '../shared/Container';

import ContactUsPhoto1 from '/img/ContactUs1.jpg';
import ContactUsPhoto2 from '/img/ContactUs2.jpg';

import svgImgs from '/symbol-defs.svg';
import chatBubble from '/img/chat-bubble.png';
import globe from '/img/globe.png';
import phone from '/img/phone-mobile.png';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .min(8, 'Phone must be at least 8 characters')
    .required('Required'),
});

export const ContactUs = ({ back = true, isTitle = true }) => {
  const handleSubmit = values => {
    sendEmail(values);
  };

  const sendEmail = val => {
    return emailjs
      .send('service_iywcftp', 'template_4dcop3m', val, 'fu7M-2WNRe-pfb2Tx')
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <ContactUsSection bg={back}>
      <Container>
        {isTitle && (
          <ContactUsTitle
            data-aos="fade-up"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            Contact Us
          </ContactUsTitle>
        )}
        <ContactUsTimetable
          data-aos="fade-up"
          data-aos-mirror="false"
          data-aos-once="true"
        >
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
          <ContactUsContentBox
            data-aos="fade-right"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <ContactUsListData>
              <ContactUsItemData>
                <ContactUsIcon
                  src={chatBubble}
                  width={24}
                  height={24}
                  alt="Chat Bubble"
                />
                <ContactUsTextContainer>
                  <h3>Drop Us :</h3>
                  <p>anna@aesthetica.co.nz</p>
                </ContactUsTextContainer>
              </ContactUsItemData>

              <ContactUsItemData>
                <ContactUsIcon src={globe} width={24} height={24} alt="Globe" />
                <ContactUsTextContainer>
                  <h3>Visit Us :</h3>
                  <p>
                    41 Raranga Street, Marshland, Christchurch 8083, New Zealand
                    (parking is available at front and behind the building)
                  </p>
                </ContactUsTextContainer>
              </ContactUsItemData>

              <ContactUsItemData>
                <ContactUsIcon src={phone} width={24} height={24} alt="Phone" />
                <ContactUsTextContainer>
                  <h3>Call Us :</h3>
                  <p>+6421581907</p>
                </ContactUsTextContainer>
              </ContactUsItemData>
            </ContactUsListData>

            <Formik
              initialValues={{
                email: '',
                phone: '',
                textArea: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm();
              }}
            >
              <ContactUsForm id="ContactUsForm">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessageSt
                  name="email"
                  component="div"
                  className="error"
                />
                <Field name="phone" type="tel" placeholder="+64 XX XXX XX XX" />
                <ErrorMessageSt
                  name="phone"
                  component="div"
                  className="error"
                />
                <Field
                  as="textarea"
                  name="textArea"
                  placeholder="Enter your massage"
                  rows="4"
                />
              </ContactUsForm>
            </Formik>
            <ContactUsLinkContainer>
              <ContactUsSubmitButton type="submit" form="ContactUsForm">
                SEND MESSAGE
              </ContactUsSubmitButton>
              <ContactUsSvgList>
                <ContactUsSvgItem>
                  <a
                    href="https://www.instagram.com/aesthetica_by_anna/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg>
                      <use href={`${svgImgs}#icon-instagram`}></use>
                    </svg>
                  </a>
                </ContactUsSvgItem>
                <ContactUsSvgItem>
                  <a
                    href="https://m.facebook.com/Aestheticabyanna/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg>
                      <use href={`${svgImgs}#icon-facebook`}></use>
                    </svg>
                  </a>
                </ContactUsSvgItem>
              </ContactUsSvgList>
            </ContactUsLinkContainer>
          </ContactUsContentBox>
          <ContactUsImgContainer
            data-aos="fade-left"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <img src={ContactUsPhoto1} height={615} />
            <img src={ContactUsPhoto2} />
          </ContactUsImgContainer>
        </ContactUsMainContent>
      </Container>
    </ContactUsSection>
  );
};
