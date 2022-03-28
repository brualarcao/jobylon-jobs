import React from 'react';
import DefaultTemplate from './DefaultTemplate';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Default Template', () => {
    it('Should render Default Template', () => {
        const { getByTestId } = render(<DefaultTemplate>
            <div data-testid="template_container" />
        </DefaultTemplate>, { wrapper: BrowserRouter });

        const container = getByTestId('default_template');
        const children = getByTestId('template_container');

        expect(container).toBeInTheDocument();
        expect(children).toBeInTheDocument();
    })
})