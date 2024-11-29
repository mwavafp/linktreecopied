import { NavLink, Outlet } from "react-router";
import GetApiData from "./components/GetApiData";
import Linktree from "./components/LinkTree";

function App() {
  return (
    <>
    <div className="flex m-4">
    <NavLink to="/" end>
        Home
      </NavLink>
      
      <NavLink to="/linktree" end>
        LinkTree
      </NavLink>
      
     
    </div>
   
    <Outlet/>
      <GetApiData />
    </>
  );
}

export default App;
