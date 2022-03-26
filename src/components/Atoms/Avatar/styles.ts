import styled, { css } from 'styled-components';
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
    margin: 1px 5px;

    background-color: transparent;

    align-items: center;
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
`;