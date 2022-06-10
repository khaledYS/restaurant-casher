import { filterObject } from "../../others/shorcutFunctions";
function BranchBtn(props) {
    return (
        <button className=" underline underline-offset-2 text-lg" {...filterObject(props, ["branches", "setBranches"])} onClick={()=>{
            if(props.onClick){
                props.onClick();
                return ;
            }
        }} >
            {props.title}
        </button>
    );
}

export default BranchBtn;