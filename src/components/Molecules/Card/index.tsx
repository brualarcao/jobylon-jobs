import React from "react";
import * as Atoms from '../../Atoms';
import JobylonLogo from '../../../assets/svg/jobylon-logo.svg'

import { CardContainer, CompanyLogo, Tag, TextArea } from './styles'

const CardJob: React.FC = () => {
    return (
        <CardContainer>
            <CompanyLogo src={JobylonLogo} />
            <TextArea>
                <Atoms.Text size="large" color="white">
                    Job offer - description
                </Atoms.Text>
                <Atoms.Text size="normal" color="lighter">
                    Job offer - description
                </Atoms.Text>
            </TextArea>
            <Tag>
                <Atoms.Text size="small" color="lighter">
                    Full Time
                </Atoms.Text>
            </Tag>
            <Tag>
                <Atoms.Text size="small" color="lighter">
                    Experienced
                </Atoms.Text>
            </Tag>
        </CardContainer>
    )
}

export default CardJob;