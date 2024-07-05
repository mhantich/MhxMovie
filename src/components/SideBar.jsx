import {  useSelector } from 'react-redux'

function SideBar() {
    const menu = [{name:'Movies',link:'/'},{name:'OpenFlix',link:'/OpenFlix'},{name:'Tv',link:'/Tv'},{name:'Tranding',link:'/Tranding'}]
    const showbar = useSelector((state) => state.globalReducer.showSideBar);


  return (
    <div     style={{zIndex:500000}}    className={` ${
        showbar ? "translate-x-0 " : "-translate-x-full "
      } duration-700 py-6 text-white  bg-black fit-content md:translate-x-0 xs:left-0 xs:top-0 md:hidden w-5/6 fixed md:-bottom-20 h-full z-30 `}>
            <>
      <div className="    flex  flex-col h-full justify-center " >
        {menu?.map((item, index) => (
          <div key={index} className=" w-full   px-4 py-4 flex-col sm:flex-row">
            <div className=" duration-700 rounded-sm text-center   tran  w-full">
              <button
                onClick={() => {
                  navigator(`/${item.link}`);
                }}
                className="flex justify-center items-center px-2 gap-4 py-1 w-full"
              >
                <h4 className="text-xl font-semibold capitalize ">
                  {item.name}
                </h4>
               
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
    </div>
  )
}

export default SideBar