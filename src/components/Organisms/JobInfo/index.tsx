import React, { useEffect, useRef } from 'react';
import * as Atoms from '../../Atoms';
import { IJobInfo } from '../../../models/models';
import { VscChromeClose } from 'react-icons/vsc';

import { ModalContainer, ModalContent, LogoCompany, NavigationSection, ButtonNavigation, OwnerContainer, JobInfoContainer, JobInfoDescription, JobInfoHeader, ReviewedInfos, InfoSection } from './styles'
import { handleClickOutsideAndEsc } from '../../../utils/handleClickOutsideAndEsc';

const JobInfo: React.FC<IJobInfo> = ({ job, error, open, onTrigger }) => {

    const wrapperRef = useRef(document.createElement('div'));

    useEffect(() => {
        handleClickOutsideAndEsc(wrapperRef, open);
      }, [wrapperRef, open]);

    return (
        <ModalContainer open={open} hide={error}>
        <JobInfoContainer hide={error} data-testid="jobInfo_container">
            <ModalContent ref={wrapperRef}>
            <button
              className="closeModal_button"
              data-testid="button-trigger-modal"
              type="button"
              onClick={() => onTrigger(false)}
            >
              <VscChromeClose />
            </button>
            <JobInfoHeader data-testid="jobInfo_header">
                <LogoCompany src={job?.company?.logo} />
                <Atoms.Text size="large" color="lighter">
                    {job?.company?.name}
                </Atoms.Text>
                <Atoms.Text size="normal" color="white">
                    <strong>{job?.title}</strong>
                </Atoms.Text>
            <ReviewedInfos data-testid="reviewedInfo_container">
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
                   {job?.company?.industry}
                </Atoms.Text>
                </InfoSection>
            </ReviewedInfos>
            </JobInfoHeader>
                <h4>Requirements</h4>
            <JobInfoDescription dangerouslySetInnerHTML={{ __html: job?.skills}} data-testid="requirements_section"/>
                <h4>Job Description</h4>
            <JobInfoDescription dangerouslySetInnerHTML={{ __html: job?.descr}} data-testid="description_section"/>
            <OwnerContainer data-testid="owner_container">
                <LogoCompany src={job?.contact?.photo} />
                <div>
                <Atoms.Text size="large" color="white">
                    {job?.owner?.name}
                </Atoms.Text>
                <Atoms.Text size="normal" color="lighter">
                    {job?.owner?.email}
                </Atoms.Text>
                </div>
            </OwnerContainer>
            <NavigationSection data-testid="navigation_section">
                <ButtonNavigation onClick={() => window.open(job?.urls.ad)} data-testid="button_ad">
                    More About
                </ButtonNavigation>
                <ButtonNavigation onClick={() => window.open(job?.urls.apply)} data-testid="button_apply">
                    Apply
                </ButtonNavigation>
            </NavigationSection>
            </ModalContent>
        </JobInfoContainer>
        </ModalContainer>
    )
}

export default JobInfo;