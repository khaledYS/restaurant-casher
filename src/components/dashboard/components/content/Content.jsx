import { Outlet } from "react-router";
import UpperNavbar from "./components/UpperNavbar";

export default function Content(){


    return(
        <div className="main-content-component bg-gray-800 flex flex-col">
            <UpperNavbar />
            <Outlet />
        </div>
    )
}