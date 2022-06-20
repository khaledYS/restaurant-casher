import { useEffect } from "react";
import { filterObject, sortObjectsInArray } from "../../others/shorcutFunctions";
function BranchBtn(props) {

    // useEffect(() => {
    //     console.log("hi")
    // }, []);

    return (
        <button className=" underline underline-offset-2 text-lg" {...filterObject(props, ["branches", "setBranches", "onClick"])} onClick={()=>{
            (async ()=>{
                if(props.onClick){
                    props.onClick();
                    return ;
                }
                props.updateBranches([...sortObjectsInArray(props.branches, props.objectName)])
            })()
        }} >
            {props.title}
        </button>
    );
}

export default BranchBtn;