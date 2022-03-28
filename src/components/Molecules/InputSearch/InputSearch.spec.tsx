import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import InputSearch from './index';

const onChange = jest.fn();
const handleSearch = jest.fn();

describe('InputSearch Component', () => {
    it('Should render a Search Input component', () => {
      const { getByTestId } = render(<InputSearch handleSearch={handleSearch} />);
  
      const searchContainer = getByTestId('input_search');
      const searchInput = getByTestId('input_search_field');
      const searchButton = getByTestId('button');
  
      expect(searchContainer).toBeInTheDocument();
      expect(searchInput).toBeInTheDocument();
      expect(searchButton).toBeInTheDocument();
    });

    it('Should be able to click after search', () => {
        const { getByTestId } = render(
          <InputSearch handleSearch={handleSearch} value="test" onChange={onChange} />
        );
    
        const searchButton = getByTestId('button');
    
        fireEvent.click(searchButton);
        expect(handleSearch).toBeCalled();
      });
    

  });