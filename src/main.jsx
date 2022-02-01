import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PageNotFound from './components/others/PageNotFound';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Welcome from './components/Welcome';
import Order from './components/Order';
import Dashboard from './components/Dashboard';
import Bills from './components/Bills';
import Logout from "./components/Logout"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route path="login" element={<Login />}></Route>

          <Route path={"welcome"}>
            <Route index element={<Welcome />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="order">
              <Route index element={<Order />}></Route>
              <Route path=":billId" element={<Order />}></Route>
            </Route>
            <Route path="bills" >
              <Route index element={<Bills />}></Route>
              <Route path=":billId" element={<Bills />}></Route>
            </Route>
          </Route>
          
          <Route path="logout" element={<Logout />}></Route>

          <Route path="*" element={<PageNotFound />}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
