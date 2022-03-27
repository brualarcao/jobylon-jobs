import React from 'react';
import * as Atoms from '../../Atoms'
import * as Molecules from '../index'

import { DetailsCardContainer, LogoCompany, DescriptionArea } from './styles'

export const DetailsCard: React.FC = () => {
    return (
        <DetailsCardContainer>
            <LogoCompany />
            <DescriptionArea>
                Teste
            </DescriptionArea>
        </DetailsCardContainer>
    )
}

export default DetailsCard;