import React from 'react';
import { Container } from './styles';
import * as Molecules from '../components/Molecules';

const DefaultTemplate: React.FC = ({ children }) => {
    return (
        <Container data-testid="default_template">
            <Molecules.Header />
            <Molecules.SearchInput placeholder="Search, Find & Apply" handleSearch={() => console.log('test')}/>
            {children}
        </Container>
    )
}

export default DefaultTemplate;