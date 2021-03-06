import React, { useEffect, useState } from 'react';
import JobylonLogo from '../../../assets/svg/favicon.svg'
import ProfileImg from '../../../assets/images/profile.jpg'
import { FaSearch, FaBook, FaPen, FaUserEdit } from 'react-icons/fa'
import { Container, Logo, LogoContent } from './styles'

import { EMenuOptions } from '../../../enums/menuOptions'

import * as Atoms from '../../Atoms';
import { Molecules } from '../..';

const Header: React.FC = () => {
  const [hamburguerMenu, setHamburguerMenu] = useState<boolean>(false);
  const [normalMenu, setNormalMenu] = useState<boolean>(true);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth <= 980) {
      setHamburguerMenu(true);
    } else {
      setHamburguerMenu(false);
    }
  }, [windowWidth]);

    const options = [
        {
          id: 1,
          label: EMenuOptions.Jobs,
          icon: <FaSearch />,
          route: '/jobs',
        },
        {
          id: 2,
          label: EMenuOptions.Historic,
          icon: <FaBook />,
          route: '/historic',
        },
        {
          id: 3,
          label: EMenuOptions.Messages,
          icon: <FaPen />,
          route: '/messages',
        },
        {
          id: 4,
          label: EMenuOptions.Profile,
          icon: <FaUserEdit />,
          route: '/profile',
        },
      ];

    return (
        <Container data-testid="header">
            <LogoContent>
            <a href="/">
            <Logo src={JobylonLogo} />
            </a>
            <Atoms.Text size='large' weight='bold' color='lighter' >
                Jobylon
            </Atoms.Text>
            
            </LogoContent>
            <Molecules.Menu options={options} />
            <Atoms.Avatar  src={ProfileImg}/>
        </Container>
    )
};

export default Header;