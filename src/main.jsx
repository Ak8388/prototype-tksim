import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

// Components
import Home from './pages/Home/Home.jsx';
import { Calendar, ClassPage } from './pages/index.js';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/class/",
        children: [
          {
            path: ":classId",
            element: <ClassPage />,
          }
        ]
      },
      {
        path: "/calendar",
        element: <Calendar />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
