import { db } from '../senstive/firebase-config';
import { collection, getDocs } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { Link as div, Outlet } from 'react-router-dom';
import './tailwind/output.css';
import Login from './components/login';
import Welcome from './components/Welcome';

function App() {
  const [user, setUser] = useState(null);
  

  return (
    <div className=" font-sans App w-[100vw] h-[100vh] bg-slate-900 flex flex-col justify-center items-center  text-white">
      {user ? <Welcome user={user} /> : <Login setUser={setUser} />}
    </div>
  )
}


export default App

