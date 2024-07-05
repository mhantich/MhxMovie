import { Link, Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import Footer from "./components/Footer";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { setshowSideBar } from "./store";


function AppLayout() {
  const dispatch = useDispatch()

  const menu = [{name:'Movies',link:'/'},{name:'openFix',link:'/OpenFlix'},{name:'Tv',link:'/Tv'},{name:'Tranding',link:'/Tranding'}]
  return (
    <>
          <header className=" w-full bg-black py-3 z-50 fixed top-0 mb-3 text-white ">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">MhxMovie</div>
          <ul className="hidden md:flex space-x-6">
            {menu.map((item,index)=>(
            <li key={index}><Link to={item.link} className="hover:text-gray-300"> {item.name} </Link></li>

            ))}
  
     
          </ul>
          <div className="flex items-center space-x-4">
            <input
              type="search"
              placeholder="Find Movies & TV"
              className="px-3 py-1 rounded text-black hidden md:block"
            />
            <Button variant="outline" size="icon" className="text-black border-white">
              S
            </Button>
    
              <Menu onClick={()=>{dispatch(setshowSideBar())}} className="md:hidden"/>
            
          </div>
        </nav>
      </header>
  
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
