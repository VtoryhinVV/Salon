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
                                <ServicesListItemTitle>Dermal filler / facial sculpting</ServicesListItemTitle>
                                <ServicesSvg>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>
                            <ServicesOpenList id="first" onClick={openListItem} />


                            <CSSTransition in={open === "first"} timeout={200} classNames="my-node">
                                <ServicesListHiddenContent open={open === "first"}>
                                    <p>Facial sculpting filler treatment can enhance the patient’s bone structure in areas such as cheeks, chin     and jawline. The Filler treatment can help both men and women to create more contoured facial features to   obtain a more masculine or feminine look, respectively.</p>
                                    <ServicesLink to="/products">READ MORE</ServicesLink>
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
                                    <p>Facial sculpting filler treatment can enhance the patient’s bone structure in areas such as cheeks, chin and jawline. The Filler treatment can help both men and women to create more contoured facial features to obtain a more masculine or feminine look, respectively.</p>
                                    <ServicesLink to="/products">READ MORE</ServicesLink>
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
                                    <p>Facial sculpting filler treatment can enhance the patient’s bone structure in areas such as cheeks, chin and jawline. The Filler treatment can help both men and women to create more contoured facial features to obtain a more masculine or feminine look, respectively.</p>
                                    <ServicesLink to="/products">READ MORE</ServicesLink>
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
                                    <p>Facial sculpting filler treatment can enhance the patient’s bone structure in areas such as cheeks, chin and jawline. The Filler treatment can help both men and women to create more contoured facial features to obtain a more masculine or feminine look, respectively.</p>
                                    <ServicesLink to="/products">READ MORE</ServicesLink>
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
                                    <p>Facial sculpting filler treatment can enhance the patient’s bone structure in areas such as cheeks, chin and jawline. The Filler treatment can help both men and women to create more contoured facial features to obtain a more masculine or feminine look, respectively.</p>
                                    <ServicesLink to="/products">READ MORE</ServicesLink>
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