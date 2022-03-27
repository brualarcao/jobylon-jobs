import React from 'react';
import * as Atoms from '../../components/Atoms';
import * as Molecules from '../../components/Molecules'
import { JobListContainer } from './styles';

const JobList: React.FC = () => {
    return (
        <JobListContainer>
            <Molecules.Card />
            <Molecules.DetailsCard />
        </JobListContainer>
    )
}

export default JobList;