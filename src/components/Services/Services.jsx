import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Container } from '../shared/Container';
import {
  ServicesSection,
  ServicesTitle,
  ServicesContent,
  ServicesList,
  ServicesOpenList,
  ServicesListItem,
  ServicesListVisibleContent,
  ServicesListHiddenContent,
  ServicesTextContent,
  ServicesListItemTitle,
  ServicesSvg,
  ServicesLink,
  ServicesButtonUnderList,
  ServicesButtonUnderImg,
  ServicesImg,
} from './Services.styled';

import ServicesPhoto from '/img/Services.jpg';
import ServicesPhotoMob from '/img/ServicesMob.jpg';
import svgImgs from '/symbol-defs.svg';
import './style.css';

export const Services = ({ back = true }) => {
  const [open, setOpen] = useState('first');
  const openListItem = e => {
    e.stopPropagation();
    setOpen(e.target.id);
  };

  return (
    <ServicesSection bg={back}>
      <Container>
        <ServicesTitle>Services</ServicesTitle>
        <ServicesContent>
          <div>
            <ServicesList>
              <ServicesListItem>
                <ServicesListVisibleContent>
                  <ServicesListItemTitle>Dermal filler</ServicesListItemTitle>
                  <ServicesSvg open={open === 'first'}>
                    <use href={`${svgImgs}#icon-arrow`}></use>
                  </ServicesSvg>
                </ServicesListVisibleContent>
                <ServicesOpenList id="first" onClick={openListItem} />

                <CSSTransition
                  in={open === 'first'}
                  timeout={200}
                  classNames="my-node"
                >
                  <ServicesListHiddenContent open={open === 'first'}>
                    <ServicesTextContent>
                      <span>
                        Dermal filler - used to sculpt, enhance, replenish and
                        shape the face.
                      </span>
                      <span>
                        Dermal fillers are commonly used to smooth out wrinkles,
                        add volume to areas of the face, enhance and contour
                        facial features.
                      </span>
                      <span>
                        These gel-like substances, made from hyaluronan, which
                        is a complex chain of carbohydrates, are naturally found
                        in our bodies. Hyaluronan, or hyaluronic acid, is
                        responsible for maintaining the hydration, plumpness,
                        and youthful look of our skin.
                      </span>
                    </ServicesTextContent>
                    <ServicesLink to="/services/dermal_filler">
                      READ MORE
                    </ServicesLink>
                  </ServicesListHiddenContent>
                </CSSTransition>
              </ServicesListItem>

              <ServicesListItem>
                <ServicesListVisibleContent>
                  <ServicesListItemTitle>Lip Filler</ServicesListItemTitle>
                  <ServicesSvg open={open === 'second'}>
                    <use href={`${svgImgs}#icon-arrow`}></use>
                  </ServicesSvg>
                </ServicesListVisibleContent>
                <ServicesOpenList id="second" onClick={openListItem} />

                <CSSTransition
                  in={open === 'second'}
                  timeout={200}
                  classNames="my-node"
                >
                  <ServicesListHiddenContent open={open === 'second'}>
                    <ServicesTextContent>
                      <span>
                        At Aesthetica clinic, we offer top-quality injectable
                        services to help you achieve the perfect pout. Lip
                        filler is a highly sought-after cosmetic procedure
                        globally, and for good reason.
                      </span>
                    </ServicesTextContent>
                    <ServicesLink to="/services/lip_filler">
                      READ MORE
                    </ServicesLink>
                  </ServicesListHiddenContent>
                </CSSTransition>
              </ServicesListItem>

              <ServicesListItem>
                <ServicesListVisibleContent>
                  <ServicesListItemTitle>
                    Injectables for men
                  </ServicesListItemTitle>
                  <ServicesSvg open={open === 'third'}>
                    <use href={`${svgImgs}#icon-arrow`}></use>
                  </ServicesSvg>
                </ServicesListVisibleContent>
                <ServicesOpenList id="third" onClick={openListItem} />

                <CSSTransition
                  in={open === 'third'}
                  timeout={200}
                  classNames="my-node"
                >
                  <ServicesListHiddenContent open={open === 'third'}>
                    <ServicesTextContent>
                      <span>
                        At Aesthetica clinic, we have an increasing amount of
                        male clients wanting to look and feel their best. Our
                        experienced team is trained in providing subtle and
                        natural-looking results, ensuring that you still look
                        like yourself, just more youthful and with less
                        noticeable lines and wrinkles.
                      </span>
                    </ServicesTextContent>
                    <ServicesLink to="/services/injectables_for_men">
                      READ MORE
                    </ServicesLink>
                  </ServicesListHiddenContent>
                </CSSTransition>
              </ServicesListItem>

              <ServicesListItem>
                <ServicesListVisibleContent>
                  <ServicesListItemTitle>
                    Anti Wrinkle & Wrinkle preventative
                  </ServicesListItemTitle>
                  <ServicesSvg open={open === 'fourth'}>
                    <use href={`${svgImgs}#icon-arrow`}></use>
                  </ServicesSvg>
                </ServicesListVisibleContent>
                <ServicesOpenList id="fourth" onClick={openListItem} />

                <CSSTransition
                  in={open === 'fourth'}
                  timeout={200}
                  classNames="my-node"
                >
                  <ServicesListHiddenContent open={open === 'fourth'}>
                    <ServicesTextContent>
                      <span>
                        Botox® and Dysport® are FDA-approved neuromodulators
                        that are specially designed to target and minimize the
                        appearance of wrinkles and fine lines. These treatments
                        involve the injection of a purified protein into
                        specific facial muscles, temporarily relaxing them and
                        reducing the appearance of wrinkles caused by repetitive
                        facial expressions.
                      </span>
                    </ServicesTextContent>
                    <ServicesLink to="/services/anti_wrinkle">
                      READ MORE
                    </ServicesLink>
                  </ServicesListHiddenContent>
                </CSSTransition>
              </ServicesListItem>

              <ServicesListItem>
                <ServicesListVisibleContent>
                  <ServicesListItemTitle>Medical</ServicesListItemTitle>
                  <ServicesSvg open={open === 'fifth'}>
                    <use href={`${svgImgs}#icon-arrow`}></use>
                  </ServicesSvg>
                </ServicesListVisibleContent>
                <ServicesOpenList id="fifth" onClick={openListItem} />

                <CSSTransition
                  in={open === 'fifth'}
                  timeout={200}
                  classNames="my-node"
                >
                  <ServicesListHiddenContent open={open === 'fifth'}>
                    <ServicesTextContent>
                      <span>
                        Botulinium Toxi A - Botox/Dysport is not only known for
                        its remarkable anti-wrinkle effects but is also widely
                        used for the treatment of various medical conditions.
                        Our experienced team is dedicated to providing safe and
                        effective Botox solutions, including treatments for
                        hyperhidrosis, teeth grinding, and headaches.
                      </span>
                    </ServicesTextContent>
                    <ServicesLink to="/services/medical">
                      READ MORE
                    </ServicesLink>
                  </ServicesListHiddenContent>
                </CSSTransition>
              </ServicesListItem>
            </ServicesList>
            <ServicesButtonUnderList
              href="https://bookings.gettimely.com/aesthetica7/book"
              target="_blank"
              rel="noreferrer"
            >
              BOOK APPOINMENT
            </ServicesButtonUnderList>
          </div>
          <picture>
            <source
              srcSet={ServicesPhoto}
              media="(min-width: 1200px)"
              width="470"
              height="601"
            />
            <ServicesImg src={ServicesPhotoMob} width="330" height="422" />
          </picture>
          <ServicesButtonUnderImg
            href="https://bookings.gettimely.com/aesthetica7/book"
            target="_blank"
            rel="noreferrer"
          >
            BOOK APPOINMENT
          </ServicesButtonUnderImg>
        </ServicesContent>
      </Container>
    </ServicesSection>
  );
};
