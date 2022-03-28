import styled, { css } from 'styled-components';
import { breakpoints } from '../../../styles/theme';
import { AvatarProps } from './interfaces';

const types = {
    small: () => css`
        width: 30px;
        height: 30px;
    `,
    medium: () => css`
        width: 40px;
        height: 40px;
    `,
    large: () => css`
        width: 50px;
        height: 50px;
    `,
}

export const AvatarContainer = styled.div`
    display: flex;
    position: relative;
    margin: 1px 5px;

    background-color: transparent;

    align-items: center;

    @media (max-width: ${breakpoints.smallMobile}) {
        margin: 1px 3px;   
    }
    @media (max-width: ${breakpoints.superSmallMobile}) {
        display: none;
    }
`;

export const AvatarInfo = styled.div`
    display: flex;
    flex-direction: column;

    background-color: transparent;
    margin-left: 5px;
`;

export const AvatarImg = styled.img<AvatarProps>`
    ${({ size }) => css`
        ${!!size && types[size]()}
    `}
    border-radius: 50px;

    @media (max-width: ${breakpoints.smallMobile}) {
        height: 25px;
        width: 25px;   
    }
`;