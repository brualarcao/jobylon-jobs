import React from 'react';
import * as Atoms from '../../components/Atoms';
import PageNotFoundImg from '../../assets/images/404.png';
import { PageNotFoundContainer, BackgroundImg } from './styles';

const PageNotFound: React.FC = () => {
    return (
        <PageNotFoundContainer data-testid="pageNotFound_container">
            <BackgroundImg src={PageNotFoundImg} data-testid="pageNotfound_image"/>
        </PageNotFoundContainer>
    )
}

export default PageNotFound;