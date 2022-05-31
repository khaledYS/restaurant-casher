import { db, app } from './firebase-config';
import { collection, getDocs, getDoc, doc, serverTimestamp, setDoc, connectFirestoreEmulator } from '@firebase/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { 
  Link, 
  Outlet,
  useNavigate,
  useLocation,
  useParams
} from 'react-router-dom';
import './tailwind/output.css';
import './styles/App.css';
import ErrorVisualer from './components/others/ErrorVisualer';
import Loading from './components/others/Loading'
import { EmployeeContext, LoadingContext, loginBtnIsDisapledContext, ErrorVisualerContext } from './components/others/contexts';
import RoutesPanel from './components/others/RoutesPanel';
import whenCatchingAnError from './components/others/whenCatchingAnError';

function App() {
  const [employee, setEmployee] = useState(null)
  const [loading, setLoading] = useState(null)
  const [routesPanel, setRoutesPanel] = useState(false);
  const [loginBtnIsDisapled, setLoginBtnIsDisapled] = useState(false);
  const [errorVisualerState, setErrorVisualerState] = useState(null)
  const urlParams = useParams();

  
  // the current Route
  const route = useLocation();
  // navigate between routers
  const navigate = useNavigate();


  
  useEffect(()=>{
    setLoginBtnIsDisapled(true)            
    setLoading(true)

    onAuthStateChanged(getAuth(app), async (employee)=>{
      try { 
        setLoading(true)     
        if(employee){
            setLoading(true)  
            setLoginBtnIsDisapled(true)            

            // if t he user is signed in then check if the user has been signed in before by checking the db and if not then creat a user in the db with his props
            const auth = employee;
            const docRef = doc(db, "users", auth.uid);
            const docSnap = await getDoc(docRef).catch((error)=>{console.log(error); throw new Error(error)});
            
            console.log(employee, auth)

            // get the tax
            const billsSettingsDocRef = doc(db, "others/billsSettings");
            let tax = await getDoc(billsSettingsDocRef).catch((error)=>{throw new Error(error)})
            tax = tax.data().tax;
            
            if (docSnap.exists()) {
              setEmployee({...docSnap.data(), tax, employee})
            }else{
              const dataToPass = {
                uid : auth.uid,
                name:auth.displayName, 
                created: serverTimestamp(), 
                position:"employer", 
                email: auth.email
              }
              await setDoc(docRef, {...dataToPass}).catch((error)=>{throw new Error(error)});
              setEmployee({...dataToPass, tax, employee})
            }
            
            
            // if the user is signed in and he is in the login page then route him to welcome page or the user is signed in but he is in the / dir then redirect him also
            // if(route.pathname == "/login" || route.pathname == "/") navigate("/welcome")
            
            setLoginBtnIsDisapled(false)
            setLoading(false)
          }else{
            // if the user isn't signed in and he isn't on the login page then redirect him to login page
            // if(route.pathname != "/login") navigate("/login");
            
            // turn of loading
            setLoginBtnIsDisapled(false)
            setLoading(false)
          }
        } catch (error) {
          if(route.pathname != "/login") navigate("/login");
          setLoading(false)
          setErrorVisualerState({
            reason: ["InternetConnection"]
          })
        } finally {
          // setLoading(false)
        }})

      
      setRoutesPanel(false)
    }, [])
    

  useEffect(() => {
    setRoutesPanel(false)
  }, [route]);
  


  // we listen to the keyboard events
  // so if he click the R key then show him the routes Panel in some cases do not do . 
  function toggleRoutesPanel(e){
    if(loading || e.code != "KeyR"|| e.keyCode != 82 || route.pathname=="/login" || e.ctrlKey) return ;
    routesPanel ? setRoutesPanel(false) : setRoutesPanel(true);
  }
  window.onkeydown = (e)=>{toggleRoutesPanel(e)}




  return (
    <div className="app font-sans App w-[100vw] h-full bg-slate-900 flex flex-col justify-center items-center text-white">
      <EmployeeContext.Provider value={{employee, setEmployee}}>
        {errorVisualerState && <ErrorVisualer error={errorVisualerState} />}
        <ErrorVisualerContext.Provider value={{errorVisualerState, setErrorVisualerState}}>
          {loading && <Loading />}
          <LoadingContext.Provider value={{setLoading, loading}}>
            <loginBtnIsDisapledContext.Provider value={{loginBtnIsDisapled, setLoginBtnIsDisapled}}>
              <Outlet />
            </loginBtnIsDisapledContext.Provider>
            {routesPanel && <RoutesPanel />} 
          </LoadingContext.Provider>
        </ErrorVisualerContext.Provider>  
      </EmployeeContext.Provider>
    </div>
  )
}


export default App;