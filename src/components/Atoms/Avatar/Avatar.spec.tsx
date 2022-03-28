import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './index';

describe('Avatar Component', () => {
    it('Should render a Avatar component with size normal', () => {
        const { getByTestId } = render(<Avatar src="../../../assets/images/profile.jpg" size="medium" />);

    const avatar = getByTestId('avatar_container');

    expect(avatar).toBeInTheDocument();
    });

    it('Should render a Avatar component with size small', () => {
        const { getByTestId } = render(<Avatar src="../../../assets/images/profile.jpg" size="small" />);

    const avatar = getByTestId('avatar_container');

    expect(avatar).toBeInTheDocument();
    });

    it('Should render a Avatar component with size large', () => {
        const { getByTestId } = render(<Avatar src="../../../assets/images/profile.jpg" size="large" />);

    const avatar = getByTestId('avatar_container');

    expect(avatar).toBeInTheDocument();
    });
})