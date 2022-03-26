import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const Container = styled.div`
    display: flex;
    position: relative;

    top: 0;

    height: 60px;
    width: 100%;

    align-items: center;
    justify-content: space-between;

    padding: 0 100px;

    background-color: ${colors.backgroundLighterColor};

    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;

    .logo_content {
        display: flex;
    }
`;

export const LogoContent = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
`;

export const Logo = styled.img`
    background-color: transparent;

    align-self: center;
    justify-self: center;

    width: 30px;
    height: 30px;
`;

export const Menu = styled.div`
    display: flex;
`;