import { useState } from "react";
import { CSSTransition } from 'react-transition-group';

import { Container } from "../shared/Container"
import { ServicesSection,
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
    ServicesImg
} from "./Services.styled"

import ServicesPhoto from "/img/Services.jpg";
import ServicesPhotoMob from "/img/ServicesMob.jpg";
import svgImgs from '/symbol-defs.svg';
import "./style.css"

export const Services = () => {
    const [open, setOpen] = useState("first");
    const openListItem = (e) => {
        e.stopPropagation();
        setOpen(e.target.id);
    };

    return <ServicesSection>
        <Container>
            <ServicesTitle>Services</ServicesTitle>
            <ServicesContent>
                <div>
                    <ServicesList>

                        <ServicesListItem>
                            <ServicesListVisibleContent>
                                <ServicesListItemTitle>Dermal filler</ServicesListItemTitle>
                                <ServicesSvg>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>
                            <ServicesOpenList id="first" onClick={openListItem} />


                            <CSSTransition in={open === "first"} timeout={200} classNames="my-node">
                                <ServicesListHiddenContent open={open === "first"}>
                                    <ServicesTextContent>
                                        <p>Dermal filler - used to sculpt, enhance, replenish and shape the face.</p>
                                        <p>Dermal fillers are commonly used to smooth out wrinkles, add volume to areas of the face, enhance and contour facial features.</p>
                                        <p>These gel-like substances, made from hyaluronan, which is a complex chain of carbohydrates, are naturally found in our bodies. Hyaluronan, or hyaluronic acid, is responsible for maintaining the hydration, plumpness, and youthful look of our skin.</p>
                                    </ServicesTextContent>
                                    <ServicesLink to="/services/dermal_filler">READ MORE</ServicesLink>
                                </ServicesListHiddenContent>
                            </CSSTransition>
                        </ServicesListItem>

                        <ServicesListItem>
                            <ServicesListVisibleContent>
                                <ServicesListItemTitle>Lip Filler</ServicesListItemTitle>
                                <ServicesSvg>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>
                            <ServicesOpenList id="second" onClick={openListItem} />

                            <CSSTransition in={open === "second"} timeout={200} classNames="my-node">
                                <ServicesListHiddenContent open={open === "second"}>
                                    <ServicesTextContent>
                                        <p>Dermal filler - used to sculpt, enhance, replenish and shape the face.</p>
                                        <p>Dermal fillers are commonly used to smooth out wrinkles, add volume to areas of the face, enhance and contour facial features.</p>
                                        <p>These gel-like substances, made from hyaluronan, which is a complex chain of carbohydrates, are naturally found in our bodies. Hyaluronan, or hyaluronic acid, is responsible for maintaining the hydration, plumpness, and youthful look of our skin.</p>
                                    </ServicesTextContent>  
                                    <ServicesLink to="/services/lip_filler">READ MORE</ServicesLink>
                                </ServicesListHiddenContent>
                            </CSSTransition>
                        </ServicesListItem>

                        <ServicesListItem>
                            <ServicesListVisibleContent>
                                <ServicesListItemTitle>Injectables for men</ServicesListItemTitle>
                                <ServicesSvg>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>
                            <ServicesOpenList id="third" onClick={openListItem} />

                            <CSSTransition in={open === "third"} timeout={200} classNames="my-node">
                                <ServicesListHiddenContent open={open === "third"}>
                                    <ServicesTextContent>
                                        <p>Dermal filler - used to sculpt, enhance, replenish and shape the face.</p>
                                        <p>Dermal fillers are commonly used to smooth out wrinkles, add volume to areas of the face, enhance and contour facial features.</p>
                                        <p>These gel-like substances, made from hyaluronan, which is a complex chain of carbohydrates, are naturally found in our bodies. Hyaluronan, or hyaluronic acid, is responsible for maintaining the hydration, plumpness, and youthful look of our skin.</p>
                                    </ServicesTextContent>
                                    <ServicesLink to="/services/injectables_for_men">READ MORE</ServicesLink>
                                </ServicesListHiddenContent>
                            </CSSTransition>
                        </ServicesListItem>

                        <ServicesListItem>
                            <ServicesListVisibleContent>
                                <ServicesListItemTitle>Anti Wrinkle & Wrinkle preventative</ServicesListItemTitle>
                                <ServicesSvg>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>
                            <ServicesOpenList id="fourth" onClick={openListItem} />

                            <CSSTransition in={open === "fourth"} timeout={200} classNames="my-node">
                                <ServicesListHiddenContent open={open === "fourth"}>
                                    <ServicesTextContent>
                                        <p>Dermal filler - used to sculpt, enhance, replenish and shape the face.</p>
                                        <p>Dermal fillers are commonly used to smooth out wrinkles, add volume to areas of the face, enhance and contour facial features.</p>
                                        <p>These gel-like substances, made from hyaluronan, which is a complex chain of carbohydrates, are naturally found in our bodies. Hyaluronan, or hyaluronic acid, is responsible for maintaining the hydration, plumpness, and youthful look of our skin.</p>
                                    </ServicesTextContent>
                                    <ServicesLink to="/services/medical">READ MORE</ServicesLink>
                                </ServicesListHiddenContent>
                            </CSSTransition>    
                        </ServicesListItem>

                        <ServicesListItem>
                            <ServicesListVisibleContent>
                                <ServicesListItemTitle>Medical</ServicesListItemTitle>
                                <ServicesSvg>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>
                            <ServicesOpenList id="fifth" onClick={openListItem} />

                            <CSSTransition in={open === "fifth"} timeout={200} classNames="my-node">
                                <ServicesListHiddenContent open={open === "fifth"}>
                                    <ServicesTextContent>
                                        <p>Dermal filler - used to sculpt, enhance, replenish and shape the face.</p>
                                        <p>Dermal fillers are commonly used to smooth out wrinkles, add volume to areas of the face, enhance and contour facial features.</p>
                                        <p>These gel-like substances, made from hyaluronan, which is a complex chain of carbohydrates, are naturally found in our bodies. Hyaluronan, or hyaluronic acid, is responsible for maintaining the hydration, plumpness, and youthful look of our skin.</p>
                                    </ServicesTextContent>
                                    <ServicesLink to="/products/anti_wrinkle">READ MORE</ServicesLink>
                                </ServicesListHiddenContent>
                            </CSSTransition>    
                        </ServicesListItem>

                    </ServicesList>
                    <ServicesButtonUnderList to="">
                    BOOK APPOINMENT
                    </ServicesButtonUnderList>
                </div>
                <picture>
                    <source srcSet={ServicesPhoto} media="(min-width: 1200px)" />
                    <ServicesImg src={ServicesPhotoMob} />
                </picture>
                <ServicesButtonUnderImg to="">
                    BOOK APPOINMENT
                </ServicesButtonUnderImg>
            </ServicesContent>
        </Container>
    </ServicesSection>
}