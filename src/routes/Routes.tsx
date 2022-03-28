import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DefaultTemplate from '../templates/DefaultTemplate';
import {JobList, PageNotFound} from '../pages';

export function AppRoutes() {
    return (
        <BrowserRouter>
        <DefaultTemplate>
            <Routes>
                <Route path="/" element={<Navigate to="/jobs" />} />
                <Route path="/jobs" element={<JobList />} />
                <Route path="/historic" element={<PageNotFound />} />
                <Route path="/messages" element={<PageNotFound />} />
                <Route path="/profile" element={<PageNotFound />} />
            </Routes>
        </DefaultTemplate>
        </BrowserRouter>
    )
}