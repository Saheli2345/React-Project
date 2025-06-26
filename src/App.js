import React from 'react';
import './App.css';
import Head from './Components/Head';
import MainContainer from './Components/MainContainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import InnerContainer from './Components/InnerContainer';
import Watch from './Components/Watch';
import Test from './Components/Test';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <>
              <Head/>
              <MainContainer />
              </>,
      children: [
        {
          path: "/",
          element: <InnerContainer />
        },
        {
          path: "/history",
          element: <h1>This is History Page</h1>
        },
        {
          path: "/watch",
          element: <Watch />  
        },
        {
          path: "/test",
          element: <Test />  
        },
      ]
    },
    {
      path: "/demo",
      element: <h1>This is Demo Page</h1>
    }
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
/*/<></> sugar coating from, react fagment for wraping/*/