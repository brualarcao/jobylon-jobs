import React from 'react';
import { ButtonContainer } from './styles';
import { ButtonProps } from './interfaces'

const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps> = ({ width, height, children, ...props }) => {
    const { disabled, onClick } = props;
    return (
        <ButtonContainer width={width} height={height}disabled={disabled} onClick={onClick} data-testid="button">
            {children}
        </ButtonContainer>
    )
}

export default Button;