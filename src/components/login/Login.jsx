import { useContext, useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from "@firebase/auth"
import { useNavigate } from "react-router";
import { LoadingContext } from "../others/contexts";
import { IoLogInOutline } from "react-icons/io5"
import Btn from "../others/btn";
import { app } from "../../firebase-config";
import whenCatchingAnError from "../others/whenCatchingAnError";
function Login(props) {
    const [loginBtnIsDisapled, setLoginBtnIsDisapled] = useState(false);
    const navigate = useNavigate();
    const { setLoading } = useContext(LoadingContext);

    async function login (){

      if (loginBtnIsDisapled) return ; 

      try {

          setLoading(true)
          setLoginBtnIsDisapled(true)
          const auth = getAuth(app);
          const googleProvider = new GoogleAuthProvider()
          await signInWithPopup(auth, googleProvider)
          setLoginBtnIsDisapled(false)
        
      } catch (error) {
        whenCatchingAnError(error)
      } finally {
        setLoading(false)
        setLoginBtnIsDisapled(false)
      }

    }
    
    return (
        <div className="Login-component w-fit flex flex-col items-stretch text-center">
        <div
        //  className={}
         onClick={login}
          ><Btn title="Login" className={`${loginBtnIsDisapled && "pointer-events-none cursor-wait !bg-gray-800"}`}> <IoLogInOutline /> </Btn> </div>
      </div>
    );
}

export default Login;