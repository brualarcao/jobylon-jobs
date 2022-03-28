import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const DropdownContainer = styled.div`
    border: 1px solid ${colors.blueColor};
    background-color: ${colors.textLightColor};
    border-radius: 4px;

    min-width: 200px;
`;

export const DropdownCustomized = styled.select`
    width: 100%;
    height: 100%;
    border-radius: 8px;

    border: none;
    outline: none;
    background-color: ${colors.backgroundLighterColor};
    color: ${colors.allWhiteTextColor};
`;