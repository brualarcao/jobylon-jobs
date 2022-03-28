import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Card from './index';

const companyMock = {
  id: 2,
  name: 'Company',
  logo: '../../../assets/svg/jobylon-logo.svg',
  industry: 'Technology',
  slug: 'company',
  name_internal: 'company',
  website: 'https://jobylon.com',
  descr: 'Company description',
  cover: '',
};

const locationsMock = {
    location: {
        text: 'Taubaté',
    }
};

describe('Card Component', () => {
    it('Should renders Card Component', () => {
      const { getByTestId } = render(
        <Card
          company={companyMock}
          locations={locationsMock}
          employment_type="Full time"
          experience="Entry level"
          title="Frontend Engineer"
          selectedJobId={2}
          loading={false}
        />
      );
  
      const card = getByTestId('card_container');
  
      expect(card).toBeInTheDocument();
    });
  });