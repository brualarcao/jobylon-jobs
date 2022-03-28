import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import JobInfo from './index';

window.open = jest.fn();

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
  
  describe('JobInfo Component', () => {
    it('Should render JobInfo Component', () => {
      const { getByTestId } = render(
        <JobInfo job={jobMock} loading={false} error={false} />
      );
  
      const jobInfo_container = getByTestId('jobInfo_container');
      const jobInfo_header = getByTestId('jobInfo_header');
      const reviewedInfo_container = getByTestId('reviewedInfo_container');
      const requirements_section = getByTestId('requirements_section');
      const description_section = getByTestId('description_section');
      const owner_container = getByTestId('owner_container');
      const navigation_section = getByTestId('navigation_section');
  
      expect(jobInfo_container).toBeInTheDocument();
      expect(jobInfo_header).toBeInTheDocument();
      expect(reviewedInfo_container).toBeInTheDocument();
      expect(requirements_section).toBeInTheDocument();
      expect(description_section).toBeInTheDocument();
      expect(owner_container).toBeInTheDocument();
      expect(navigation_section).toBeInTheDocument();
    });
  
    it('Should be able to click on buttons to navigate', () => {
      const { getByTestId } = render(<JobInfo job={jobMock} loading={false} error={false} />);
  
      const buttonAd = getByTestId('button_ad');
      const buttonApply = getByTestId('button_apply');
  
      expect(buttonAd).toBeInTheDocument();
      expect(buttonApply).toBeInTheDocument();
      fireEvent.click(buttonAd);
      fireEvent.click(buttonApply);
    });
  });