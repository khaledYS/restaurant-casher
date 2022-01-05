import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PageNotFound from './components/PageNotFound';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login';
import Welcome from './components/Welcome';
import Order from './components/Order';
import Dashboard from './components/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route path="login" element={<Login />}></Route>

          <Route path="welcome" element={<Welcome />}></Route>
            <Route path="welcome/dashboard" element={<Dashboard />}></Route>
            <Route path="welcome/order" element={<Order />}></Route>

          <Route path="*" element={<PageNotFound />}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
