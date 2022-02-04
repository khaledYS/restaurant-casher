import { Link, useLocation} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function UpperNavbar() {

    const route = useLocation()

    return ( 
        <div className="p-2 pb-0 flex bg-[#556171] items-center justify-between">
            {["users", "bills", "settings"].map(
                (name)=><Link style={{flexBasis:"100%"}} className={`mx-2 text-center py-2 hover:backdrop-brightness-150 hover:rounded-t-lg ${route.pathname.includes(name) && "backdrop-brightness-150 rounded-t-lg "}`} key={uuidV4()} to={name}>{name}</Link>
            )}
        </div>
     );
}

export default UpperNavbar;

// #556171