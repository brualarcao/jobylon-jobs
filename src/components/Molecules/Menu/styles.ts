import styled, { css } from 'styled-components';
import { colors } from '../../../styles/theme';
import { IMenuSelected } from './interfaces'

const menuSelected = {
    selected: () => css`
        border-radius: 12px;
        color: ${colors.blueColor};

        transition: all 0.2s ease-in-out;

        svg path,
        svg circle {
            stroke: ${colors.blueColor};
        }
    `,
};

export const MenuContainer = styled.div`
    display: flex;
    background-color: transparent;
`;

export const MenuOption = styled.div<IMenuSelected>`
    display: flex;
    
    width: 120px;
    height: 100%;

    color: ${props => props.selected ? `${colors.blueColor}` : `${colors.textLightColor}`};

    background-color: transparent;

    cursor: pointer;

    margin: 5px 5px 5px 0;

    align-items: center;
    justify-content: center;
    border-right: 1px solid ${colors.blueColor};

    &:last-child {
        border-right: none;
    }



    :hover {
        color: ${colors.blueColor};
    }

    svg { 
        margin-right: 10px;
        background-color: transparent;
    }
`;