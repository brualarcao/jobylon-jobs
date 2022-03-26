import styled from 'styled-components';
import { colors, fontStyle } from '../../../styles/theme';

export const InputSearchContainer = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background-color: ${colors.backgroundLighterColor};

    width: 90%;
    height: 60px;

    margin: 15px 0;
`;

export const InputSearch = styled.input`
    width: 100%;

    margin-left: 8px;
    padding: 8px;

    border: none;
    outline: none;

    color: ${colors.textLightColor};

    background-color: transparent;

    ::placeholder {
        color: ${colors.textLightColor};
        font-size: ${fontStyle.size.small};
    }
`;