import { useContext, useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from "@firebase/auth"
import { useNavigate } from "react-router";
import { LoadingContext } from "./others/contexts";
import { IoLogInOutline } from "react-icons/io5"
import Btn from "./others/btn";
function Login(props) {
    const [loginBtnIsDisapled, setLoginBtnIsDisapled] = useState(false);
    const navigate = useNavigate();
    const { setLoading } = useContext(LoadingContext);

    async function login (){
      try {

          setLoading(true)
          await setLoginBtnIsDisapled(true)
          const auth = await getAuth();
          const googleProvider = await new GoogleAuthProvider()
          await signInWithPopup(auth, googleProvider)
          setLoading(false)
        
      } catch (err) {
        setLoading(false)
        await setLoginBtnIsDisapled(false)
      }

    }
    
    return (
        <div className="Login-component w-fit flex flex-col items-stretch text-center">
        <div
         className={`${loginBtnIsDisapled && "pointer-events-none bg-gray-700 cursor-wait"}`}
         onClick={login}
          ><Btn title="Login"> <IoLogInOutline /> </Btn> </div>
      </div>
    );
}

export default Login;