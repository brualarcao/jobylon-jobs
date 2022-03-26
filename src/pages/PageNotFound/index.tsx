import React from 'react';
import * as Atoms from '../../components/Atoms';
import { PageNotFoundContainer } from './styles';

const PageNotFound: React.FC = () => {
    return (
        <PageNotFoundContainer>
            <Atoms.Text size="large" color="white">
            Ops! Sorry, page not founded! 
            </Atoms.Text>
        </PageNotFoundContainer>
    )
}

export default PageNotFound;