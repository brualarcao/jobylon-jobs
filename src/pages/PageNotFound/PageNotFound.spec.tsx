import React from 'react';
import PageNotFound from './index'
import { render } from '@testing-library/react';

describe('Page not found component', () => {
    it('Should render 404 error on access', () => {
        const { getByTestId } = render(<PageNotFound />);

        const notFound_container = getByTestId('pageNotFound_container');
        const notFound_image = getByTestId('pageNotfound_image');

        expect(notFound_container).toBeInTheDocument();
        expect(notFound_image).toBeInTheDocument();
    })
})