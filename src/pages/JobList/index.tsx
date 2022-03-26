import React from 'react';
import * as Atoms from '../../components/Atoms';
import { JobListContainer } from './styles';

const JobList: React.FC = () => {
    return (
        <JobListContainer>
            <Atoms.Text size="large" color="white">
            Hi Jobylon User!
            </Atoms.Text>
        </JobListContainer>
    )
}

export default JobList;