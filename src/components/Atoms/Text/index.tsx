import React from 'react';
import { TextProps } from './interfaces'
import { TextComponent } from './styles';

const Text: React.FC<TextProps> = ({ weight, size, dataTest, children, color, ...props }) => {
    return (
        <TextComponent
         weight={weight}
         size={size}
         color={color}
         className={props.className}
         data-testid={dataTest}
        >
            {children}
        </TextComponent>
    )
}

export default Text;