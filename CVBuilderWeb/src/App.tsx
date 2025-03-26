import React from 'react';
import LandingScreen from './pages/LandingScreen';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from './pages/HomeLayout';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import Dashboard from './pages/Dashboard';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <LandingScreen />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },

      ],
    },
    {
      path: "/auth/sign-in",
      element: <SignInPage />,
    },
    {
      path: "/auth/sign-up",
      element: <SignUpPage />,
    },

  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
