import Menu from "./component/Menu"
import Navbar from './component/Navbar'
import { Outlet } from "react-router-dom"
import Footer from "./component/Footer"


function App() {
  return (
    <>
      <div className="flex min-h-screen w-screen">
        {/* LEFT */}
        <div className="w-[20%] sm:w-[16%] md:w-[12%] lg:w-[12%] bg-slate-200">
          <Menu />
        </div>
        {/* RIGHT */}
        <div className="w-[80%]  sm:w-[84%] md:w-[88%] lg:w-[88%] bg-slate-100 min-h-screen relative">
          <Navbar />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  )
}
export default App

