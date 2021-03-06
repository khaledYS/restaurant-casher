import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { EmployeeContext } from "../others/contexts";
import Content from "./components/content/Content";
import SideNavbar from "./components/sideNavbar/SideNavbar";

function Dashboard() {
    
    const {employee} = useContext(EmployeeContext);
    const [sideNavBarIsOpen, setSideNavBarIsOpen] = useState(false)

    return ( 
        <div className={`Dashboard-component w-full h-full flex ${sideNavBarIsOpen ?  "opened " : "not-opened"}`}>
            {
                employee?.position == "admin" &&
                <>
                    <SideNavbar sideNavBarIsOpen={sideNavBarIsOpen} setSideNavBarIsOpen={setSideNavBarIsOpen} />
                    <><Outlet /></>
                </>
            }
        </div>
     );
}

export default Dashboard;