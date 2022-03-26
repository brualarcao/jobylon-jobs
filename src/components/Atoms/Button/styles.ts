import styled from 'styled-components';
import { colors, fontStyle } from '../../../styles/theme';
import { ButtonProps } from './interfaces';

export const ButtonContainer = styled.button<ButtonProps>`
    display: flex;

    justify-content: center;
    align-items: center;

    background-color: ${colors.blueColor};

    width: ${props => props.width};
    height: ${props => props.height};

    border-radius: 10px;

    color: ${colors.allWhiteTextColor};
    font-size: ${fontStyle.size.normal};
    font-weight: ${fontStyle.weight.bold};

    &:hover {
        opacity:  0.8;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;