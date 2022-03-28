import React from 'react';
import { Container } from './styles';
import * as Molecules from '../components/Molecules';

const DefaultTemplate: React.FC = ({ children }) => {
    return (
        <Container data-testid="default_template">
            <Molecules.Header />
            {children}
        </Container>
    )
}

export default DefaultTemplate;