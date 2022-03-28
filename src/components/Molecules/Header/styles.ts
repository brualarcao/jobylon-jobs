import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles/theme';

export const Container = styled.div`
    display: flex;
    position: relative;

    top: 0;

    height: 60px;
    width: 100vw;

    align-items: center;
    justify-content: space-between;

    padding: 0 100px;

    background-color: ${colors.backgroundLighterColor};

    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;

    a { 
        background-color: transparent;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 100vw;
        padding: 0 15px;
        p { 
            display: none;
        }
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0;
    }
`;

export const LogoContent = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
`;

export const Logo = styled.img`
    display: flex;
    position: relative;
    background-color: transparent;

    align-self: center;
    justify-self: center;

    width: 30px;
    height: 30px;

    margin-left: 15px;

    @media (max-width: ${breakpoints.smallMobile}) {
        margin-left: 5px;
        width: 25px;
        height: 25px;    
    }
`;