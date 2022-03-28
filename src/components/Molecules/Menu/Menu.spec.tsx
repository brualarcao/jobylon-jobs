import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './index';
import { FaSearch, FaBook, FaPen, FaUserEdit } from 'react-icons/fa'
import { IMenuOptions } from './interfaces';
import { EMenuOptions } from '../../../enums/menuOptions';

const options = [
    {
      id: 1,
      label: EMenuOptions.Jobs,
      icon: <FaSearch />,
      route: '/jobs',
    },
    {
      id: 2,
      label: EMenuOptions.Historic,
      icon: <FaBook />,
      route: '/historic',
    },
    {
      id: 3,
      label: EMenuOptions.Messages,
      icon: <FaPen />,
      route: '/messages',
    },
    {
      id: 4,
      label: EMenuOptions.Profile,
      icon: <FaUserEdit />,
      route: '/profile',
    },
  ];

  describe('MenuOptions Component', () => {
    it('should be able to render Menu options', () => {
      const { getByTestId, getAllByTestId } = render(<Menu options={options} />, {
        wrapper: BrowserRouter,
      });
  
      const menuContainer = getByTestId('menu_container');
      const option = getAllByTestId('option');
      expect(menuContainer).toBeInTheDocument();
      expect(option.length).toBe(4);
    });
  
    it('should be able to select an option', () => {
      const { getAllByTestId } = render(<Menu options={options} />, {
        wrapper: BrowserRouter,
      });
  
      const option = getAllByTestId('option');
      fireEvent.click(option[1]);
    });
  });