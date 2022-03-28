import React from "react";
import * as Atoms from '../../Atoms';
import JobylonLogo from '../../../assets/svg/jobylon-logo.svg'
import { ICard } from './interfaces';
import { FaLocationArrow } from 'react-icons/fa'

import { CardContainer, CompanyLogo, Tag, TextArea, TagArea } from './styles'
import { useJobs } from "../../../hooks/usejobs";

const CardJob: React.FC<ICard> = ({ company, locations, employment_type, experience, title, selectedJobId, loading, ...props }) => {
    const { selectedJob } = useJobs();
    const { name, industry, logo } = company;
    const { location } = locations;
    return (
        <CardContainer
            onClick={props.onClick}
            selected={selectedJob.id === selectedJobId}
            data-testid="card"
        >
            <CompanyLogo src={logo} />
            <TextArea className="title_text">
                <Atoms.Text size="large" color="white">
                    {title}
                </Atoms.Text>
                <Atoms.Text size="normal" color="lighter">
                    {name}
                </Atoms.Text>
            </TextArea>
            <TextArea className="location_text">
                <Atoms.Text size="normal" color="white">
                    <FaLocationArrow /> {location.text}
                </Atoms.Text>
                <Atoms.Text size="normal" color="lighter">
                    {industry}
                </Atoms.Text>
            </TextArea>
            <TagArea>
            <Tag>
                <Atoms.Text size="small" color="lighter">
                    {employment_type}
                </Atoms.Text>
            </Tag>
            <Tag>
                <Atoms.Text size="small" color="lighter">
                    {experience}
                </Atoms.Text>
            </Tag>
            </TagArea>
        </CardContainer>
    )
}

export default CardJob;