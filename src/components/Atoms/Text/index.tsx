import React from 'react';

interface IText { 
    textSize?: 'small' | 'medium' | 'big';
    weight?: 'light' | 'normal' | 'bold';
}

const Text: React.FC<IText> = ({ children }) => {
    return (
        <h1>{children}</h1>
    )
}

export default Text;