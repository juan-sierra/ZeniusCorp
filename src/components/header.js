import React from "react";
import { Link } from "gatsby";
import Nav from "./nav";
// import MobileMenu from "./mobileMenu";
import styled from "styled-components";
import { Menu } from "styled-icons/material/";
import ZeniusLogo from "../images/Logo-4.png";

const MainHeader = styled.header`
    width: 100%;
`;

const HeaderWrapper = styled.div`
    width: 100%;

    img {
        height: 125px;
        width: 125px;
    }
`;

const LOGOWrapper = styled.div`
    max-width: 970px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NAVWrapper = styled.div`
    max-width: 970px;
    margin: auto;
`;

const DIVIDER = styled.hr`
    border: none;
    border-bottom: 2px solid #eee;
`;

const Header = ({ siteTitle }) => (
    <MainHeader>
        <HeaderWrapper>
            <LOGOWrapper>
                <img src={ZeniusLogo} alt="zenius corp logo" />
                <h2>Job Openings</h2>
            </LOGOWrapper>
            <DIVIDER />
            <NAVWrapper>
                <Nav />
            </NAVWrapper>
            <DIVIDER />
        </HeaderWrapper>
    </MainHeader>
);

export default Header;
