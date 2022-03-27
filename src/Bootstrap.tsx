import React from 'react';
import { AppRoutes } from './routes/Routes';
import GlobalStyles from './styles/globalStyles';
import { JobProvider } from './contexts';

const Bootstrap: React.FC = () => {
    return (
        <JobProvider>
        <GlobalStyles />
        <AppRoutes />
        </JobProvider>
    )
}

export default Bootstrap;