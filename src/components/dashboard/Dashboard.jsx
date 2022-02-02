import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../others/contexts";
import Content from "./components/content/Content";
import SideNavbar from "./components/SideNavbar";

function Dashboard() {
    const [sideNavBarIsOpen, setSideNavBarIsOpen] = useState(true)

    return ( 
        <div className={`Dashboard-component w-full h-full flex ${sideNavBarIsOpen ?  "opened " : "not-opened"}`}>
            <SideNavbar sideNavBarIsOpen={sideNavBarIsOpen} setSideNavBarIsOpen={setSideNavBarIsOpen} />
            <Content sideNavBarIsOpen={sideNavBarIsOpen} />
        </div>
     );
}

export default Dashboard;