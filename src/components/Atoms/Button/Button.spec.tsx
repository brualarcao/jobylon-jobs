import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from './index';

const onClick = jest.fn();

describe('Button Component', () => {
  it('Should be able to render a Button', () => {
    const { getByTestId } = render(<Button onClick={onClick} height="150px" width="150px"/>);

    const button = getByTestId('button');

    expect(button).toBeInTheDocument();
  });

  it('Should be able to click a Button', () => {
    const { getByTestId } = render(<Button onClick={onClick} height="150px" width="150px"/>);

    const button = getByTestId('button');
    fireEvent.click(button)
    expect(onClick).toBeCalled();
  });

  it('Should be disabled', () => {
    const { getByTestId } = render(<Button disabled onClick={onClick} height="150px" width="150px"/>);

    const button = getByTestId('button');
    expect(button).toBeDisabled();
  });
});