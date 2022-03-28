import React from 'react';
import * as Atoms from '../../Atoms';
import { IJobInfo } from '../../../models/models';

import { LogoCompany, NavigationSection, ButtonNavigation, OwnerContainer, JobInfoContainer, JobInfoDescription, JobInfoHeader, ReviewedInfos, InfoSection } from './styles'

const JobInfo: React.FC<IJobInfo> = ({ job, error }) => {
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
            <ReviewedInfos>
                <InfoSection>
                <Atoms.Text size="small" color="white">
                    {job?.experience}
                </Atoms.Text>
                </InfoSection>
                <InfoSection>
                <Atoms.Text size="small" color="white">
                   Posted since {job?.from_date}
                </Atoms.Text>
                </InfoSection>
                <InfoSection>
                <Atoms.Text size="small" color="white">
                   {job?.function}
                </Atoms.Text>
                </InfoSection>
                <InfoSection>
                <Atoms.Text size="small" color="white">
                   {job?.company.industry}
                </Atoms.Text>
                </InfoSection>
            </ReviewedInfos>
            </JobInfoHeader>
                <h4>Requirements</h4>
            <JobInfoDescription dangerouslySetInnerHTML={{ __html: job?.skills}} />
                <h4>Job Description</h4>
            <JobInfoDescription dangerouslySetInnerHTML={{ __html: job?.descr}} />
            <OwnerContainer>
                <LogoCompany src={job?.contact.photo} />
                <div>
                <Atoms.Text size="large" color="white">
                    {job.owner.name}
                </Atoms.Text>
                <Atoms.Text size="normal" color="lighter">
                    {job.owner.email}
                </Atoms.Text>
                </div>
            </OwnerContainer>
            <NavigationSection>
                <ButtonNavigation onClick={() => window.open(job?.urls.ad)}>
                    More About
                </ButtonNavigation>
                <ButtonNavigation onClick={() => window.open(job?.urls.apply)}>
                    Apply
                </ButtonNavigation>
            </NavigationSection>
        </JobInfoContainer>
    )
}

export default JobInfo;