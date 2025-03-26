import React from 'react';
import LandingScreen from './pages/LandingScreen';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from './pages/HomeLayout';
import SignInPage from './pages/auth/SignInPage';
import Dashboard from './pages/Dashboard';

function App() {

  const router = createBrowserRouter([
    {
      element: <HomeLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },

      ],
    },
    {
      path: "/",
      element: <LandingScreen />,
    },
    {
      path: "/auth/sign-in",
      element: <SignInPage />,
    },


  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
