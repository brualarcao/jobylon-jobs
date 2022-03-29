import React, { useState, useCallback, useEffect } from 'react';
import * as Atoms from '../../Atoms';
import * as Molecules from '../../Molecules';
import * as Organisms from '../index';
import { IJob, IList } from '../../../models/models';
import { sortBy } from '../../../utils/sortBy';
import { JobSelectionContainer, JobListContainer, SortByOption } from './styles'
import { orderByOptions } from '../../../models/orderByOptions';
import { useJobs } from '../../../hooks/usejobs';


const JobSelection: React.FC<IList> = ({ jobs, setSelectedJob, loading, setShowModal, error }) => {
    const [filteredJobs, setFilteredJobs] = useState<IJob[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [search, setSearch] = useState('');
    const { selectedJob } = useJobs();
    const windowWidth = window.innerWidth;

    const handleCardClick = useCallback(
        (job: IJob) => {
            if (windowWidth <= 630) {
                const { urls } = job;
                window.open(urls.ad);
            } else {
                setSelectedJob(job);
                setModalOpen(true);
            }
        },
        [windowWidth, window]
      );

      const handleSearch = useCallback(
        (search: string) => {
          setSearch(search);
          const filtered = jobs?.filter(({ title, company, locations }) => {
            return (
              title.toLowerCase().includes(search.toLowerCase()) ||
              company.name.toLowerCase().includes(search.toLowerCase()) ||
              locations
                .map(({ location }) => location.text)
                .join(' ')
                .toLowerCase()
                .includes(search.toLowerCase())
            );
          });
          setFilteredJobs(filtered);
        },
        [search, setSearch, jobs]
      );

      const handleClearFilter = useCallback(() => {
        setSearch('');
        setFilteredJobs(jobs);
      }, [jobs]);

      const handleSortBy = useCallback(
        (order: string) => {
          if (order === 'crescent') {
            const sorted = sortBy(filteredJobs);
            setFilteredJobs([...sorted]);
          }
          if (order === 'decrescent') {
            const sorted = sortBy(filteredJobs).reverse();
            setFilteredJobs([...sorted]);
          }
        },
        [filteredJobs]
      );

      useEffect(() => {
        setFilteredJobs(jobs);
      }, [jobs]);

      return (
        <JobListContainer data-testid="jobList_container">
          <Molecules.SearchInput placeholder="Search, Find & Apply" handleSearch={handleSearch} data-testid="jobList_searchInput"/>
          <SortByOption data-testid="jobList_sortBy">
             <Atoms.Dropdown options={orderByOptions} onChange={handleSortBy} disabled={loading} data-testid="jobList_dropdown" />
             <button onClick={handleClearFilter} data-testid="jobList_resetFilters">
                <Atoms.Text size="small" weight="bold">
                    Reset Filters
                </Atoms.Text>
            </button>
          </SortByOption>
          {filteredJobs.length > 0 ? (
              <JobSelectionContainer data-testid="jobs_container">
                  {filteredJobs.map((job) => {
                      const { company, locations, id, employment_type, experience, title } = job;
                      return (
                          <Molecules.Card 
                          key={id}
                          company={company} 
                          locations={locations[0]}
                          employment_type={employment_type}
                          experience={experience}
                          title={title}
                          onClick={() => handleCardClick(job)}
                          selectedJobId={id}
                          loading={loading}      
                          />
                      );
                  })}
              </JobSelectionContainer>
              ) : (
                  !loading && <h2>Sorry, something wrong happened.</h2>
              )}
              {modalOpen && (
                <Organisms.JobInfo 
                job={selectedJob} 
                loading={loading} 
                error={error} 
                open={modalOpen}
                onTrigger={(value: boolean) => {
                  setModalOpen(value);
                }}
                />
              )}   
        </JobListContainer>
      )
}

export default JobSelection;