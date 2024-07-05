import { Link, Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import Footer from "./components/Footer";


function AppLayout() {
  return (
    <>
          <header className=" w-full bg-black py-3 z-50 fixed top-0 mb-3 text-white ">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">MhxMovie</div>
          <ul className="hidden md:flex space-x-6">
            <li><Link to="" className="hover:text-gray-300">Free Movies & TV</Link></li>
            <li><Link to="/openFix" className="hover:text-gray-300">Open Flix</Link></li>
            <li><Link to="" className="hover:text-gray-300">Live TV</Link></li>
            <li><Link to="" className="hover:text-gray-300">Features</Link></li>
            <li><Link to="" className="hover:text-gray-300">Download</Link></li>
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
          </div>
        </nav>
      </header>
  
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
