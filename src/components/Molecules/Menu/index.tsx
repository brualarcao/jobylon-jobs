import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import { IMenuOptions } from './interfaces';

import { MenuContainer, MenuOption } from './styles';

const Menu: React.FC<IMenuOptions> = ({ options, open }) => {
    const navigate = useNavigate();
    const activeOption = useLocation().pathname;
    const windowWidth = window.innerWidth;

    return (
        <MenuContainer open={open}>
            {options.map(({ id, label, icon, route }) => (
                <MenuOption 
                 key={id}
                 onClick={() => navigate(`${route}`)}
                 selected={ route === activeOption }
                 datat-testid={`option_${label}`}
                >
                 {!!icon && icon} {label}
             </MenuOption>
            ))}
        </MenuContainer>
    )
}

export default Menu;