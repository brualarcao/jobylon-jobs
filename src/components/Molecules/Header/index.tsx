import React from 'react';
import JobylonLogo from '../../../assets/svg/favicon.svg'
import ProfileImg from '../../../assets/images/profile.jpg'
import { Container, Logo, LogoContent, Menu } from './styles'

import * as Atoms from '../../Atoms';

const Header: React.FC = () => {
    return (
        <Container data-testid="header">
            <LogoContent>
            <Logo src={JobylonLogo} />
            <Atoms.Text size='large' weight='bold' color='lighter' >
                Jobylon
            </Atoms.Text>
            </LogoContent>
            <Atoms.Avatar  src={ProfileImg}/>
        </Container>
    )
};

export default Header;