import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    weight?: 'light' | 'normal' | 'bold';
    size?: 'small' | 'normal' | 'large';
    color?: 'white' | 'lighter' | 'darker';
    dataTest?: string;
}