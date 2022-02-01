import { db, app } from './firebase-config';
import { collection, getDocs, getDoc, doc, serverTimestamp, setDoc } from '@firebase/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { 
  Link, 
  Outlet,
  useNavigate,
  useLocation
} from 'react-router-dom';
import './tailwind/output.css';
import './styles/App.css';
import Problem from './components/others/Problem';
import Loading from './components/others/Loading'
import { EmployeeContext, LoadingContext } from './components/others/contexts';
import RoutesPanel from './components/others/RoutesPanel';

function App() {
  const [employee, setEmployee] = useState(null)
  const [loading, setLoading] = useState(null)
  const [routesPanel, setRoutesPanel] = useState(false);
  
  // the current Route
  const route = useLocation();
  // navigate between routers
  const navigate = useNavigate();


  
  useEffect(()=>{
    onAuthStateChanged(getAuth(app), async (user)=>{
        try {      
          !loading && setLoading(true)
          if(user){
            
            
            // if the user is signed in then check if the user has been signed in before by checking the db and if not then creat a user in the db with his props
            const auth = getAuth(app);
            const docRef = doc(db, "users", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
    
            // get the tax
            let tax = await getDoc(doc(db, "others/billsSettings"))
            tax = tax.data().tax
            
            if (docSnap.exists()) {
              setEmployee({...docSnap.data(), tax})
            }else{
              const dataToPass = {
                uid : auth.currentUser.uid,
                name:auth.currentUser.displayName, 
                created: serverTimestamp(), 
                position:"employer"
              }
              await setDoc(docRef, {...dataToPass});
              setEmployee({...dataToPass, tax})
            }
            
            
            // if the user is signed in and he is in the login page then route him to welcome page or the user is signed in but he is in the / dir then redirect him also
            if(route.pathname == "/login" || route.pathname == "/") navigate("/welcome")
            
            setLoading(false)
          }else{
            // if the user isn't signed in and he isn't on the login page then redirect him to login page
            if(route.pathname != "/login") navigate("/login");
            
            // turn of loading
            setLoading(false)
          }
      } catch (error) {
        window.alert(JSON.stringify(error))
        console.log(JSON.stringify(error))
        if(route.pathname != "/login") navigate("/login");
      } finally {
        setLoading(false)
      }
      })

    setRoutesPanel(false)
  }, [])


  useEffect(() => {
    setRoutesPanel(false)
  }, [route]);
  


  // we listen to the keyboard events
  // so if he click the R key then show him the routes Panel in some cases do not do . 
  function toggleRoutesPanel(e){
    if(loading || e.code != "KeyR" || route.pathname=="/welcome" || route.pathname=="/login") return ;
    routesPanel ? setRoutesPanel(false) : setRoutesPanel(true);
  }
  window.onkeydown = (e)=>{toggleRoutesPanel(e)}

  return (
    <div className="app font-sans App w-[100vw] h-[100vh] bg-slate-900 flex flex-col justify-center items-center  text-white">
      <EmployeeContext.Provider value={{employee, setEmployee}}>
        {loading && <Loading />}
        <LoadingContext.Provider value={{setLoading, loading}}>
          <Outlet />
        </LoadingContext.Provider>
      </EmployeeContext.Provider>
      {routesPanel && <RoutesPanel />} 
    </div>
  )
}


export default App;