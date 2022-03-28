import React from 'react';
import * as Atoms from '../../Atoms';
import { IJobInfo } from '../../../models/models';

import { LogoCompany, JobInfoContainer, JobInfoDescription, JobInfoHeader } from './styles'

const JobInfo: React.FC<IJobInfo> = ({ job, loading, error }) => {
    return (
        <JobInfoContainer hide={error}>
            <JobInfoHeader>
                <LogoCompany src={job?.company?.logo} />
                <Atoms.Text size="large" color="lighter">
                    {job?.company?.name}
                </Atoms.Text>
                <Atoms.Text size="normal" color="white">
                    <strong>{job?.title}</strong>
                </Atoms.Text>
            </JobInfoHeader>
                <h4>Requirements</h4>
            <JobInfoDescription dangerouslySetInnerHTML={{ __html: job?.skills}} />
                <h4>Job Description</h4>
            <JobInfoDescription dangerouslySetInnerHTML={{ __html: job?.descr}} />
            <Atoms.Button
             height="250"
             width="400"
             onClick={() => window.open(job?.urls.ad)}
            >
                More details
            </Atoms.Button>
        </JobInfoContainer>
    )
}

export default JobInfo;