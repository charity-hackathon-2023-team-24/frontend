import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import GamePage from './components/pages/GamePage';
import HomePage from './components/pages/HomePage';
import Layout from './components/pages/Layout';
import routes from './routes';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={routes.rootPage} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.gamePage} element={<GamePage />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
