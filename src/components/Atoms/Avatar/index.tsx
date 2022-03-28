import React from 'react';
import { AvatarProps } from './interfaces';
import { AvatarContainer, AvatarInfo, AvatarImg } from './styles';

import * as Atoms from '../index';

const Avatar: React.FC<AvatarProps> = ({ src, alt, size="large" }) => {
    return (
        <AvatarContainer data-testid="avatar_container">
            <AvatarImg 
            src={src} 
            alt={alt} 
            size={size} 
            data-testid="avatar_user" 
            />
        <AvatarInfo>
            <Atoms.Text size="small" weight="bold" color="white">
                Bruno Alarcão
            </Atoms.Text>
            <Atoms.Text size="small" weight="bold" color="lighter">
                Frontend Engineer
            </Atoms.Text>
        </AvatarInfo>
        </AvatarContainer>
    )
}

export default Avatar;