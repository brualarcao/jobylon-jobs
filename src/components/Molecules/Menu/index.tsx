import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IMenuOptions } from './interfaces';

import { MenuContainer, MenuOption } from './styles';

const Menu: React.FC<IMenuOptions> = ({ options }) => {
    const navigate = useNavigate();
    const activeOption = useLocation().pathname;

    return (
        <MenuContainer>
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