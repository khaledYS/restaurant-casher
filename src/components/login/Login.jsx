import { useContext, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "@firebase/auth";
import { ErrorVisualerContext } from "../others/contexts";
import { useNavigate } from "react-router";
import { LoadingContext, loginBtnIsDisapledContext } from "../others/contexts";
import { IoLogInOutline } from "react-icons/io5";
import Btn from "../others/btn";
import { app } from "../../firebase-config";
function Login(props) {
  const navigate = useNavigate();
  const { setLoading } = useContext(LoadingContext);
  const { loginBtnIsDisapled, setLoginBtnIsDisapled } = useContext(
    loginBtnIsDisapledContext
  );
  const { errorVisualerState, setErrorVisualerState } =
    useContext(ErrorVisualerContext);

  async function login() {
    if (loginBtnIsDisapled) return;

    try {
      setLoading(true);
      setLoginBtnIsDisapled(true);
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      setErrorVisualerState({
        reason: ["InternetConnection"],
        printToConsole: error,
      });
      setLoading(false);
      setLoginBtnIsDisapled(false);
    }
  }

  return (
    <div className="Login-component w-fit h-full  flex flex-col items-center justify-center text-center">
      <div
        //  className={}
        onClick={login}
      >
        <Btn
          title="Login"
          className={`${
            loginBtnIsDisapled && "pointer-events-none cursor-wait !bg-gray-800"
          }`}
        >
          {" "}
          <IoLogInOutline />{" "}
        </Btn>{" "}
      </div>
    </div>
  );
}

export default Login;
