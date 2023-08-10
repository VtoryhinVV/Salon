import styled from '@emotion/styled';
import bgServices from "/img/bgServices.jpg"
import { Link } from 'react-router-dom';

export const ServicesSection = styled.section `
    padding: 120px 0;

    h1, h2, h3, p {
        padding: 0;
        margin: 0;
    }

    background-image: url(${bgServices});

    & > div {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`

export const ServicesTitle = styled.h2 `
    font-family: Prata;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0.96px;
`

export const ServicesContent = styled.div `
    display: flex;
    gap: 40px;
`

export const ServicesList = styled.ul `
    list-style-type: none;
    padding: 0;
`

export const ServicesListItem = styled.li `
    padding: 24px;
    width: 637px;

    display: flex;
    flex-direction: column;
    gap: 18px;

    border: 1px solid #BDBDBD;

    cursor: pointer;
`

export const ServicesListVisibleContent = styled.div `
    display: flex;
    justify-content: space-between;

    align-items: center;
`

export const ServicesListHiddenContent = styled.div `
    display: flex;
    flex-direction: column;
    gap: 16px;

    display: ${(props) => (props.open ? "flex" : "none")};
`

export const ServicesListItemTitle = styled.h3 `
    font-size: 18px;
    font-weight: 600;
`

export const ServicesSvg = styled.svg `
    width: 10px;
    height: 10px;
    fill: var(--brown);
`

export const ServicesLink = styled(Link) `
    color: var(--brown);
    text-decoration: none;
    width: 105px;
`