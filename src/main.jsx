import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PageNotFound from './components/others/PageNotFound';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import Welcome from './components/welcome/Welcome';
import Order from './components/branch/order/Order';
import Dashboard from './components/dashboard/Dashboard';
import Bills from './components/branch/bills/Bills';
import Logout from "./components/logout/Logout"
import DashboardContent from './components/dashboard/components/content/Content';
import DashboardContentAccounts from './components/dashboard/components/content/components/accounts/Accounts';
import DashboardContentBills from './components/dashboard/components/content/components/bills/Bills';
import DashboardContentSettings from './components/dashboard/components/content/components/settings/Settings';
import Branch from './components/branch/Branch';
import Branches from './components/branches/Branches';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route path="login" element={<Login />}></Route>

          <Route path="dashboard" element={<Dashboard />}>
            <Route path="branch">
              <Route path=":branchId" element={<DashboardContent />}>
                <Route path="Accounts" element={<DashboardContentAccounts />}></Route>
                <Route path="bills" element={<DashboardContentBills />}></Route>
                <Route path="settings" element={<DashboardContentSettings />}></Route>
              </Route>
            </Route>
          </Route>
          <Route path={"branches"} element={<Branches/>}>
            <Route path=":currentBranchId" element={<Branch />}>
              <Route index element={<Welcome />}></Route>
              <Route path="order">
                <Route index element={<Order />}></Route>
                <Route path=":billId" element={<Order />}></Route>
              </Route>
              <Route path="bills" >
                <Route index element={<Bills />}></Route>
                <Route path=":billId" element={<Bills />}></Route>
              </Route>
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
