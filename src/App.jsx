import { db, userIsSigned } from '../senstive/firebase-config';
import { collection, getDocs } from '@firebase/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { 
  Link, 
  Outlet,
  useNavigate
} from 'react-router-dom';
import './tailwind/output.css';
import Login from './components/login';
import Welcome from './components/Welcome';
import Problem from './components/Problem';

function App() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    (async ()=>{
      if(userIsSigned()){
        navigate("/welcome")
        console.log("hi")
      }else{
        console.log()
        navigate("/login")
      }
    })();
  }, [])

  useEffect(()=>{console.log(getAuth().currentUser)})

  return (
    <div className=" font-sans App w-[100vw] h-[100vh] bg-slate-900 flex flex-col justify-center items-center  text-white">
      <Outlet />
    </div>
  )
}


export default App

