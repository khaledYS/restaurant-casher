import { useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "@firebase/auth"
import { useNavigate } from "react-router";
function Login(props) {
    const [loginBtnIsDisapled, setLoginBtnIsDisapled] = useState(false);
    const navigate = useNavigate()

    async function login (){
      try {
        
          await setLoginBtnIsDisapled(true)
          const auth = await getAuth();
          const googleProvider = await new GoogleAuthProvider()
          await signInWithPopup(auth, googleProvider)

          getAuth().currentUser ? navigate("/welcome") : navigate("/login")
          console.log(getAuth)
        
      } catch (err) {
        console.log()
        await setLoginBtnIsDisapled(false)
      }

    }
    
    return (
        <div className="w-fit flex flex-col items-stretch text-center">
        <div
         className={`min-w-[300px] rounded-lg block px-8 py-6 bg-gray-600 hover:bg-gray-700  text-4xl my-4 cursor-pointer ${loginBtnIsDisapled && "pointer-events-none bg-gray-700 cursor-wait"}`}
         onClick={login}
          >Login</div>
      </div>
    );
}

export default Login;