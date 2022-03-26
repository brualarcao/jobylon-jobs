import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultTemplate from '../templates/DefaultTemplate';

export function AppRoutes() {
    return (
        <BrowserRouter>
        <DefaultTemplate>
            <Routes>
                <Route path="/" element={<h1>Hello Jobylon</h1>} />
            </Routes>
        </DefaultTemplate>
        </BrowserRouter>
    )
}