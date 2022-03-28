import styled, { css } from 'styled-components';
import { breakpoints, colors, fontStyle } from '../../../styles/theme';
import { TextProps } from './interfaces';

const textOptions = {
    sizes: {
        small: () => css`
            font-size: ${fontStyle.size.small};
        `,
        normal: () => css`
            font-size: ${fontStyle.size.normal};
        `,
        large: () => css`
            font-size: ${fontStyle.size.big};
        `,
    },
    weight: {
        light: () => css`
            font-weight: ${fontStyle.weight.light}
        `,
        normal: () => css`
            font-weight: ${fontStyle.weight.normal}
        `,
        bold: () => css`
            font-weight: ${fontStyle.weight.bold}
        `,
    },
    colors: {
        white: () => css`
            color: ${colors.allWhiteTextColor}
        `,
        lighter: () => css`
            color: ${colors.textLightColor}
        `,
        darker: () => css`
            color: ${colors.textDarkColor}
        `
    },
};

export const TextComponent = styled.p<TextProps>`
    ${({ size, weight, color }) => css`
        ${!!size && textOptions.sizes[size]()};
        ${!!weight && textOptions.weight[weight]()};
        ${!!color && textOptions.colors[color]()};
    `};
    
    strong {
        background-color: transparent;
    }

    background-color: transparent;

    text-align: start;
    margin-left: 0.5em;
`;
