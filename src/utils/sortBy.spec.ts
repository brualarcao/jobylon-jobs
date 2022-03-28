import { sortBy } from './sortBy';

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

  const jobMockA = {
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

  const jobMockB = {
    id: 1,
    company: companyMock,
    contact: contactsMock,
    descr: 'Job Description',
    employment_type: 'Full time',
    experience: 'Experienced',
    from_date: '2022-03-27',
    function: 'Development',
    language: 'English',
    title: 'Frontend Engineer',
    urls: urlsMock,
    owner: ownerMock,
    skills: 'JavaScript, React, TypeScript, CSS, HTML',
    locations: locationsMock,
  };

  const jobsMocked = [jobMockA, jobMockB];

  describe('Sort By Experience Util', () => {
    it('Should sort results by experience values', () => {
      const sortedJobs = sortBy(jobsMocked);
  
      expect(sortedJobs[0].experience).toBe('Entry level');
      expect(sortedJobs[1].experience).toBe('Experienced');
    });
});
