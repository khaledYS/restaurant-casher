import { db, app } from '../senstive/firebase-config';
import { collection, getDocs, getDoc, doc, serverTimestamp, setDoc } from '@firebase/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { 
  Link, 
  Outlet,
  useNavigate
} from 'react-router-dom';
import './tailwind/output.css';
import Login from './components/login';
import Welcome from './components/Welcome';
import Problem from './components/Problem';
import Loading from './components/Loading'
import { UserContext, LoadingContext } from './components/contexts';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(null)


  
  useEffect(()=>{
    setLoading(true)
    onAuthStateChanged(getAuth(), async (user)=>{
      if(user){
        console.log("user Is signed in, user should be redirected to welcome page")
        

        // if the user is signed in then check if the user has been signed in before by checking the db and if not then creat a user in the db with his props
        const auth = getAuth(app);
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data())
        }else{
          const dataToPass = {
                uid : auth.currentUser.uid,
                name:auth.currentUser.displayName, 
                created: serverTimestamp(), 
                position:"employer"
              }
              await setDoc(docRef, {...dataToPass});
              setUser(dataToPass)
        }

        // turn of loading
        setLoading(false)
            
       navigate("/welcome")
            
          }else{
        console.log("user Is signed out, user should be redirected to login page")
        navigate("/login")
        setLoading(false)
      }
    })
  }, [])

  useEffect(()=>{console.log(user)}, [user])



  return (
    <div className="app font-sans App w-[100vw] h-[100vh] bg-slate-900 flex flex-col justify-center items-center  text-white">
      <UserContext.Provider value={{user, setUser}}>
        {loading && <Loading />}
        <LoadingContext.Provider value={{setLoading}}>
          <Outlet />
        </LoadingContext.Provider>
      </UserContext.Provider>
    </div>
  )
}


export default App
