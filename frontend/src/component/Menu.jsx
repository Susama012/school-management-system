import { CiHome } from "react-icons/ci";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import Logo from '../assets/logo.png'

function Menu() {
    return (
        <div className="min-h-screen">
            {/* LOGO */}
            <div className="flex items-center justify-evenly h-20">
                <img src={Logo} alt="Logo" className="h-[55px] w-[65px]"/>
                <h1 className="text-2xl font-semibold">JS HEAVEN</h1>
            </div>
            {/* MENU */}
            <div className="flex flex-col w-full text-center">
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <CiHome className="inline-block text-2xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Home</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <RiGraduationCapLine className="inline-block text-xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Teachers</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <IoPeopleOutline className="inline-block text-xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm  font-thin">Students</span>
                    </a>
                </div>
                <div>
                    <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
                        <LuNotebookPen className="inline-block text-xl" />
                        <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Subjects</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Menu