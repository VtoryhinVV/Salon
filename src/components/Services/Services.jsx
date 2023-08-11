import { useState } from "react";
import { CSSTransition } from 'react-transition-group';

import { Container } from "../shared/Container"
import { ServicesSection,
    ServicesTitle, 
    ServicesContent, 
    ServicesList, 
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
    const log = (e) => {
        setOpen(e.target.id);
    };

    return <ServicesSection>
        <Container>
            <ServicesTitle>Services</ServicesTitle>
            <ServicesContent>
                <div>
                    <ServicesList>

                        <ServicesListItem id="first" onClick={log}>
                            <ServicesListVisibleContent id="first" onClick={log}>
                                <ServicesListItemTitle id="first" onClick={log}>Dermal filler / facial sculpting</ServicesListItemTitle>
                                <ServicesSvg id="first" onClick={log}>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>


                                <CSSTransition id="first" in={open === "first"} timeout={200} classNames="my-node">
                                    <ServicesListHiddenContent id="first" open={open === "first"}>
                                        <p>Facial sculpting filler treatment can enhance the patient’s bone structure in areas such as cheeks, chin     and jawline. The Filler treatment can help both men and women to create more contoured facial features to   obtain a more masculine or feminine look, respectively.</p>
                                        <ServicesLink to="/products">READ MORE</ServicesLink>
                                    </ServicesListHiddenContent>
                                </CSSTransition>
                        </ServicesListItem>

                        <ServicesListItem id="second" onClick={log}>
                            <ServicesListVisibleContent id="second" onClick={log}>
                                <ServicesListItemTitle id="second" onClick={log}>Lip Filler</ServicesListItemTitle>
                                <ServicesSvg id="second" onClick={log}>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>

                            <CSSTransition id="second" in={open === "second"} timeout={200} classNames="my-node">
                                <ServicesListHiddenContent id="second" open={open === "second"} transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
                                    <p>Facial sculpting filler treatment can enhance the patient’s bone structure in areas such as cheeks, chin and jawline. The Filler treatment can help both men and women to create more contoured facial features to obtain a more masculine or feminine look, respectively.</p>
                                    <ServicesLink to="/products">READ MORE</ServicesLink>
                                </ServicesListHiddenContent>
                            </CSSTransition>
                        </ServicesListItem>

                        <ServicesListItem id="third" onClick={log}>
                            <ServicesListVisibleContent id="third" onClick={log}>
                                <ServicesListItemTitle id="third" onClick={log}>Injectables for men</ServicesListItemTitle>
                                <ServicesSvg id="third" onClick={log}>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>

                            <CSSTransition id="third" in={open === "third"} timeout={200} classNames="my-node">
                                <ServicesListHiddenContent id="third" open={open === "third"}>
                                    <p>Facial sculpting filler treatment can enhance the patient’s bone structure in areas such as cheeks, chin and jawline. The Filler treatment can help both men and women to create more contoured facial features to obtain a more masculine or feminine look, respectively.</p>
                                    <ServicesLink to="/products">READ MORE</ServicesLink>
                                </ServicesListHiddenContent>
                            </CSSTransition>
                        </ServicesListItem>

                        <ServicesListItem id="fourth" onClick={log}>
                            <ServicesListVisibleContent id="fourth" onClick={log}>
                                <ServicesListItemTitle id="fourth" onClick={log}>Anti Wrinkle & Wrinkle preventative</ServicesListItemTitle>
                                <ServicesSvg id="fourth" onClick={log}>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>

                            <CSSTransition id="fourth" in={open === "fourth"} timeout={200} classNames="my-node">
                                <ServicesListHiddenContent id="fourth" open={open === "fourth"}>
                                    <p>Facial sculpting filler treatment can enhance the patient’s bone structure in areas such as cheeks, chin and jawline. The Filler treatment can help both men and women to create more contoured facial features to obtain a more masculine or feminine look, respectively.</p>
                                    <ServicesLink to="/products">READ MORE</ServicesLink>
                                </ServicesListHiddenContent>
                            </CSSTransition>    
                        </ServicesListItem>

                        <ServicesListItem id="fifth" onClick={log}>
                            <ServicesListVisibleContent id="fifth" onClick={log}>
                                <ServicesListItemTitle id="fifth" onClick={log}>Medical</ServicesListItemTitle>
                                <ServicesSvg id="fifth" onClick={log}>
                                    <use href={`${svgImgs}#icon-arrow`}></use>
                                </ServicesSvg>
                            </ServicesListVisibleContent>

                            <CSSTransition id="fifth" in={open === "fifth"} timeout={200} classNames="my-node">
                                <ServicesListHiddenContent id="fifth" open={open === "fifth"}>
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