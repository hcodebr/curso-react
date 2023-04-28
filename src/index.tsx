import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import CSSStyles from './CSSStyles';
// import Formularios from './Formularios';
// import Eventos from './Eventos';
// import Condicional from './Condicional';
// import Error from './Error';
// import Login from './Login';
// import Profile from './Profile';

// const router = createBrowserRouter([
//   {path: '/', element: <App />,
//     errorElement: <Error />},
//   {path: '/css', element: <CSSStyles />},
//   {path: '/condicional', element: <Condicional />},
//   {path: '/eventos', element: <Eventos />},
//   {path: '/formularios', element: <Formularios />},
//   {path: '/login', element: <Login />},
//   {path: '/profile', element: <Profile />},
// ]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);

