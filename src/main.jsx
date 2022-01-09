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
import Bills from './components/Bills';
import All from './components/bills/All';
import Pending from './components/bills/Pending';
import Confirmed from './components/bills/Confirmed';
import Deleted from './components/bills/Deleted';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route path="login" element={<Login />}></Route>

          <Route path="welcome" element={<Welcome />}></Route>
            <Route path="welcome/dashboard" element={<Dashboard />}></Route>
            <Route path="welcome/order" element={<Order />}></Route>
            <Route path="welcome/bills" element={<Bills />}>
              <Route path="All" element={<All />}></Route>
              <Route path="Confirmed" element={<Confirmed />}></Route>
              <Route path="Pending" element={<Pending />}></Route>
              <Route path="Deleted" element={<Deleted />}></Route>
            </Route>

          <Route path="*" element={<PageNotFound />}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
