import React from 'react';
import { Container } from './styles';
import { Molecules } from '../components';

const DefaultTemplate: React.FC = ({ children }) => {
    return (
        <Container data-testid="default_template">
            <Molecules.Header />
            {children}
        </Container>
    )
}

export default DefaultTemplate;