import Header from "./header";
import Navbar from "./navbar";

const { Outlet } = require("react-router-dom");


const MainLayout = ()=> {
    return (
        <div className="flex flex-row">
            <div className="top-0 left-0 "><Header/></div>
            <div><Outlet/></div>
            <div className="left-0 bottom-0"><Navbar/></div>
            
        </div>
    );
}

export default MainLayout