import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import JobSelection from './index';

window.open = jest.fn();
const setSelected = jest.fn();

const companyMock = {
    id: 2,
    name: 'Company',
    logo: '../../../assets/svg/jobylon-logo.svg',
    industry: 'Technology',
    slug: 'company',
    name_internal: 'company',
    website: 'https://jobylon.com',
    descr: 'Company description',
    cover: 'https://via.placeholder.com/150',
  };
  
  const locationsMock = [
    {
      location: {
          text: 'Taubaté',
      }
    }
];

  const contactsMock = {
    name: 'Bruno Alarcão',
    email: 'bruno@email.com',
    phone: '+55 12 1234-1234',
    photo: 'https://via.placeholder.com/150',
  };
  
  const urlsMock = {
    ad: 'https://via.placeholder.com/150',
    apply: 'https://via.placeholder.com/150',
  };
  
  const ownerMock = {
    id: 1,
    name: 'Bruno Alarcão',
    email: 'bruno@email.com',
  };

  const jobMock = {
    id: 1,
    company: companyMock,
    contact: contactsMock,
    descr: 'Job Description',
    employment_type: 'Full time',
    experience: 'Entry level',
    from_date: '2022-03-27',
    function: 'Development',
    language: 'English',
    title: 'Frontend Engineer',
    urls: urlsMock,
    owner: ownerMock,
    skills: 'JavaScript, React, TypeScript, CSS, HTML',
    locations: locationsMock,
  };

  const jobsMock = [jobMock];

  describe('Job List Component', () => {
    it('Should render a Job List and be able to select one card', () => {
      const { getByTestId } = render(
        <JobSelection jobs={jobsMock} setSelectedJob={setSelected} loading={false} error={false}/>
      );
  
      const jobList_container = getByTestId('jobList_container');
      const jobList_sortBy = getByTestId('jobList_sortBy');
      const jobList_searchInput = getByTestId('input_search_field');
      const jobList_dropdown = getByTestId('dropdown');
      const jobs_container = getByTestId('card_container');
      const jobCard = getByTestId('card_container');
  
      expect(jobList_container).toBeInTheDocument();
      expect(jobList_sortBy).toBeInTheDocument();
      expect(jobList_searchInput).toBeInTheDocument();
      expect(jobList_dropdown).toBeInTheDocument();
      expect(jobs_container).toBeInTheDocument();
      expect(jobCard).toBeInTheDocument();
  
      fireEvent.click(jobCard);
    });
  
    it('Should be able to search for jobs and clear filters', () => {
      const { getByTestId, getByText } = render(
        <JobSelection jobs={jobsMock} setSelectedJob={setSelected} loading={false} error={false} />
      );
  
      const search = getByTestId('input_search_field');
      const button = getByTestId('button');
  
      fireEvent.change(search, { target: { value: 'Frontend' } });
      fireEvent.click(button);
  
      const clearButton = getByText('Reset Filters');
  
      fireEvent.change(search, { target: { value: 'Taubaté' } });
      fireEvent.click(button);
  
      fireEvent.click(clearButton);
    });
  
    it('Should be able to order by crescent or decrescent values', () => {
      const { getByTestId } = render(
        <JobSelection jobs={[]} setSelectedJob={setSelected} loading={false} error={false} />
      );
  
      const sortBy = getByTestId('dropdown') as HTMLSelectElement;
  
      fireEvent.change(sortBy, { target: { value: 'crescent' } });
      expect(sortBy.value).toBe('crescent');
  
      fireEvent.change(sortBy, { target: { value: 'decrescent' } });
      expect(sortBy.value).toBe('decrescent');
    });
  });