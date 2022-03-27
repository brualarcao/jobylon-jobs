import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultTemplate from '../templates/DefaultTemplate';
import {JobList, PageNotFound} from '../pages';

export function AppRoutes() {
    return (
        <BrowserRouter>
        <DefaultTemplate>
            <Routes>
                <Route path="/jobs" element={<JobList />} />
                <Route path="/historic" element={<PageNotFound />} />
                <Route path="/messages" element={<PageNotFound />} />
                <Route path="/profile" element={<PageNotFound />} />
            </Routes>
        </DefaultTemplate>
        </BrowserRouter>
    )
}