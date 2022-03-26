import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultTemplate from '../templates/DefaultTemplate';
import {JobList, PageNotFound} from '../pages';

export function AppRoutes() {
    return (
        <BrowserRouter>
        <DefaultTemplate>
            <Routes>
                <Route path="/" element={<JobList />} />
                <Route path="/jobs" element={<PageNotFound />} />
            </Routes>
        </DefaultTemplate>
        </BrowserRouter>
    )
}