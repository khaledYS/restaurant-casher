import { Link, useLocation} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function UpperNavbar() {

    const route = useLocation()

    return ( 
        <div className=" flex bg-[#556171] items-center justify-evenly">
            {["Accounts", "Bills", "Settings"].map(
                (name)=><Link style={{flexBasis:"clamp(0%, 100%, 200px)"}} className={`text-center py-3  text-lg hover:backdrop-brightness-150  ${route.pathname.toLowerCase().includes(name.toLowerCase()) && "backdrop-brightness-150"}`} key={uuidV4()} to={name}>{name}</Link>
            )}
        </div>
     );
}

export default UpperNavbar;

// #556171