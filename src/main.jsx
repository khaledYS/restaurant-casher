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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
