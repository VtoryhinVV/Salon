import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FooterSection = styled.footer `
    padding: 60px 0;
    border-top: 1px solid black;
`

export const FooterContainer = styled.div `
    display: flex;
    justify-content: space-between;
`

export const FooterList = styled.ul `
    list-style-type: none;
    display: flex;
    gap: 120px;

    div {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`

export const StyledLink = styled(Link) `
    color: var(--black);

    text-decoration: none;
    font-family: Montserrat, sans-serif;

    font-size: 14px;
    line-height: 17px;

    &:hover {
        color: #9c7f47;
    }
`