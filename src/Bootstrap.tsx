import React from 'react';

import { AppRoutes } from './routes/Routes';
import GlobalStyles from './styles/globalStyles';

const Bootstrap: React.FC = () => {
    return (
        <>
        <GlobalStyles />
        <AppRoutes />
        </>
    )
}

export default Bootstrap;