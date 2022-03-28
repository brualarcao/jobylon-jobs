import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Dropdown from './index';

const onChange = jest.fn();

const options = [
  {
    id: 1,
    label: 'test 1',
    value: 'value 1',
  },
  {
    id: 2,
    label: 'test 2',
    value: 'value 2',
  },
  {
    id: 3,
    label: 'test 3',
    value: 'value 3',
  },
];

describe('Dropdown Component', () => {
  it('Should be able to render a Dropdown', () => {
    const { getByTestId } = render(<Dropdown options={[]} onChange={onChange} />);

    const dropdown_container = getByTestId('dropdown_container');
    const dropdown = getByTestId('dropdown');
    const defaultOption = getByTestId('default_option');

    expect(dropdown_container).toBeTruthy();
    expect(dropdown).toBeTruthy();
    expect(defaultOption).toBeTruthy();
  });

  it('Check if have a default value', () => {
    const { getByTestId } = render(<Dropdown options={[]} onChange={onChange} />);
    const defaultOption = getByTestId('default_option');

    expect(defaultOption.innerHTML).toBe('Sort by:');
  });

  it('Should be able to render all options', () => {
    const { getAllByTestId } = render(<Dropdown options={options} onChange={onChange} />);

    const option = getAllByTestId('option');

    expect(option.length).toBe(3);
  });

  it('Check if can change option', () => {
    const { getByTestId } = render(<Dropdown options={options} onChange={onChange} />);

    const dropdown = getByTestId('dropdown');

    fireEvent.change(dropdown, {
      target: { value: 'value 3' },
    });

    expect(onChange).toHaveBeenCalledWith('value 3');
  });
});
