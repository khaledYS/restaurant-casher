import { Link, useLocation} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function UpperNavbar() {

    const route = useLocation()

    return ( 
        <div className="p-4 pb-0 flex bg-[#556171] items-center justify-between">
            {["users", "bills", "settings"].map(
                (name)=><Link className={`p-4 pt-3 ${route.pathname.includes(name) && "backdrop-brightness-150 rounded-t-lg"}`} key={uuidV4()} to={name}>{name}</Link>
            )}
        </div>
     );
}

export default UpperNavbar;

// #556171