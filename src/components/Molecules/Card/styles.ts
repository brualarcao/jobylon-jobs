import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const CardContainer = styled.div`
    display: flex;

    height: 100%;
    width: 100%;

    flex-wrap: wrap;

    max-width: 330px;
    max-height: 110px;

    align-items: center;

    border-radius: 12px;

    background-color: ${colors.backgroundLighterColor};

    padding: 5px;

    margin: 12px;
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 5px;

    background-color: transparent;
`;

export const CompanyLogo = styled.img`
    width: 50px;
    height: 50px;

    background-color: transparent;

    margin: 2px 15px;
`;

export const Tag = styled.div`
    display: flex;

    align-self: flex-end;
    justify-self: flex-start;

    align-items: center;
    justify-content: center;

    background-color: ${colors.backgroundColor};

    width: 75px;
    height: 25px;

    border-radius: 5px;

    margin-right: 5px;
`;