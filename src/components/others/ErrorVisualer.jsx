import { BsExclamationCircle as ExclamationMark } from "react-icons/all";
import { ErrorVisualerContext } from "./contexts";
function ErrorVisualer({error: ErrorVisualer }) {

    if(ErrorVisualer?.printToConsole){
        console.log(ErrorVisualer.printToConsole)
    }


    return ( 
        <div className="Problem-component h-[100vh] w-[100vw] fixed backdrop-blur top-0 left-0 grid">
            <div
                className="bg-[#4b5563] 
                    mx-auto pb-2 px-4 pt-0 mt-4
                    rounded-2xl w-fit 
                    place-items-center place-self-center 
                    border-4 border-solid border-[#7f7fa1] 
                    text-center"
            >

                <ExclamationMark className="mx-auto mt-2 mb-3 text-4xl text-red-500 " />

                {/* prespecfied reasons */}
                { typeof ErrorVisualer.reason == "object" && 
                    ErrorVisualer.reason.includes("InternetConnection") ?
                        <div 
                            className={"text-base mb-2 "+ErrorVisualer.className}
                            style={{...ErrorVisualer.style}}
                            > There is an internet connection issue, <br /> Please check the internet connection, <br /> and Reload the page.</div>
                        : ""
                }

                {/* if there isn't any specifed reasons from above, then show it plainly here */}
                {typeof ErrorVisualer?.reason == "string" && ErrorVisualer?.reason?.length &&
                    <div 
                        className={"text-base "+ErrorVisualer.className}
                        style={{...ErrorVisualer.style}} 
                        >{ErrorVisualer.reason}</div>
                }
                 
                {/* if there is a closeCallback, show the close button */}
                {ErrorVisualer?.closeCallback && 
                    <button 
                        className="mt-4 mb-2 mx-auto px-2 py-1
                            block text-left text-lg 
                            top-2 left-2
                            text-[#a3a3a3] hover:text-white
                            transition-all rounded-lg"
                        onClick={()=>ErrorVisualer.closeCallback(null)}
                        >Got it!</button>}
            </div>
        </div>
     );
}

export default ErrorVisualer;