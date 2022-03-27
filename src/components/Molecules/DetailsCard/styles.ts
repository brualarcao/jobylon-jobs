import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const DetailsCardContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    border-radius: 12px;

    height: 80%;
    width: 100%;

    max-width: 720px;

    background-color: ${colors.backgroundLighterColor};

    margin: 12px;
`;

export const LogoCompany = styled.img`
    width: 80px;
    height: 80px;

    margin: 24px 0;
`;

export const DescriptionArea = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 12px;

    text-align: center;

    overflow-y: scroll;

    ::-webkit-scrollbar { 
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colors.blueColor};
        border-radius: 12px;
    }
`;