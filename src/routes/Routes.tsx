import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hello Jobylon</h1>} />
            </Routes>
        </BrowserRouter>
    )
}