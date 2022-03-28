import React from 'react';
import * as Atoms from '../../components/Atoms';
import * as Molecules from '../../components/Molecules'
import * as Organisms from '../../components/Organisms'
import { JobListContainer } from './styles';
import { useJobs } from '../../hooks/usejobs';

const JobList: React.FC = () => {
    const { jobs, selectedJob, loading, error, setSelectedJob } = useJobs();

    return (
        <JobListContainer>
            <Organisms.JobSelection jobs={jobs} setSelectedJob={setSelectedJob} error={error} loading={loading} />
            <Organisms.JobInfo job={selectedJob} loading={loading} error={error} />
        </JobListContainer>
    )
}

export default JobList;