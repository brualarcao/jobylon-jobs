import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IMenuOptions } from './interfaces';

import { MenuContainer, MenuOption } from './styles';

const Menu: React.FC<IMenuOptions> = ({ options, open }) => {
    const navigate = useNavigate();
    const activeOption = useLocation().pathname;
    const windowWidth = window.innerWidth;

    return (
        <MenuContainer open={open} data-testid="menu_container">
            {options.map(({ id, label, icon, route }) => (
                <MenuOption 
                 key={id}
                 onClick={() => navigate(`${route}`)}
                 selected={ route === activeOption }
                 data-testid="option"
                >
                 {!!icon && icon} {label}
             </MenuOption>
            ))}
        </MenuContainer>
    )
}

export default Menu;