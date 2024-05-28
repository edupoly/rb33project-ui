import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Posts from './features/posts/Posts';
import ManagerDashboard from './features/manager/ManagerDashboard';
import CustomerDashboard from './features/customer/CustomerDashboard';
import AgentDashboard from './features/agent/AgentDashboard';
import AgentForm from './features/agent/AgentForm';
import ManagerHome from './features/manager/ManagerHome';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/manager",
        element:<ManagerDashboard></ManagerDashboard>,
        children:[
          {
            path:"/manager/",
            element:<ManagerHome></ManagerHome>
          }

        ]
      },
      {
        path:"/customer",
        element:<CustomerDashboard></CustomerDashboard>
      },
      {
        path:"/agent",
        element:<AgentDashboard></AgentDashboard>,
        children:[
          {
            path:"/agent/addLoan",
            element:<AgentForm></AgentForm>
          }
        ]
      },
      {
        path:"/posts",
        element:<Posts></Posts>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
