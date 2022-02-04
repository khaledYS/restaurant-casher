import { Link, useLocation } from "react-router-dom";

function Branch(props) {

    const route = useLocation()

    return ( 
        <Link className={`branch ${route.pathname.includes(props.branchId) && "backdrop-brightness-150"}`} title={props.text} to={"/welcome/dashboard/branch/"+props.branchId}>
            <div className="icon" >
                {props.icon} 
            </div>
            <span className="text">{props.text}</span>
        </Link>
     );
}

export default Branch