import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FaSearch, FaBook, FaPen, FaUserEdit } from 'react-icons/fa'
import { EMenuOptions } from '../../../enums/menuOptions'
import { render } from '@testing-library/react';
import Header from './index';
import { AppRoutes } from '../../../routes/Routes'

const originalModule = jest.requireActual('react-router-dom');
module.exports = {
  __esModule: true,
  ...originalModule,
  useLocation: jest.fn().mockReturnValue({ pathname: '/'}),
  useNavigate: jest.fn()
};

  describe('Header Component', () => {
      it('Should render Header Component', () => {
          const { getByTestId } = render(<Header /> , {
            wrapper: BrowserRouter,
          });

          const headerContainer = getByTestId('header');
         expect(headerContainer).toBeInTheDocument();
      });
  });