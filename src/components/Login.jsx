import { useContext, useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from "@firebase/auth"
import { useNavigate } from "react-router";
import { LoadingContext } from "./contexts";
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
          await signInWithRedirect(auth, googleProvider)
          setLoading(false)
        
      } catch (err) {
        console.log()
        setLoading(false)
        await setLoginBtnIsDisapled(false)
      }

    }
    
    return (
        <div className="login w-fit flex flex-col items-stretch text-center">
        <div
         className={`
          ${loginBtnIsDisapled && "pointer-events-none bg-gray-700 cursor-wait"}`}
         onClick={login}
          >Login</div>
      </div>
    );
}

export default Login;