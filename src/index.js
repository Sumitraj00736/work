import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Solution from './Components/Solution/Solution';
import Developer from './Components/Developer/Developer';
import Company from './Components/Company/Company';
import Layers from './Layers';
import App from './App'
const router =createBrowserRouter([
  {
    path: '/',
    element: <Layers/>,
    children: [
      {
        path: "",
        element: <App/>

      },
      {
        path: "solution",
        element: <Solution/>
      },
      {
        path: "developers",
        element: <Developer/>
      },
      {
        path: "company",
        element:<Company/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);

reportWebVitals();
