import { Link } from "react-router-dom";

function Branch(props) {
    return ( 
        <Link className="branch" title={props.text} to={"/welcome/dashboard/branch/"+props.branchId}>
            <div className="icon" >
                {props.icon} 
            </div>
            <span className="text">{props.text}</span>
        </Link>
     );
}

export default Branch