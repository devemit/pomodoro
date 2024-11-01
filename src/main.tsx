import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { WelcomeMessage } from './components/welcome-message/welcome-message.tsx';
import { Widget } from './components/Widget.tsx';

import App from './App.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <WelcomeMessage /> }, // Home page
            { path: '/widgets', element: <Widget /> }, // Timer page
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
