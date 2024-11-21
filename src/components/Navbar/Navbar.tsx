import { MdLaptop } from "react-icons/md";
import { NavbarMenu } from "../../data/data";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ResponsiveMenu from "./ResponsiveMenu";
import NavBanner from "./NavBanner";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggleNavIcon = () => {setIsOpen(!isOpen)}

  return (
    <>
    <div className="container py-6 flex items-center justify-between font-poppins">
        <div className="flex items-center gap-2">
            <span className="text-3xl text-blue-600"><MdLaptop /></span>
            <h1 className="text-2xl font-bold">E-Tutor</h1>
        </div>

        <div >
            <ul className="hidden lg:flex items-center gap-12 font-semibold text-[16px] text-gray-800">
            {NavbarMenu.map((NavbarMenuItem)=> (
                <li key={NavbarMenuItem.id}>
                    <a className="hover:text-blue-600 transition-all duration-300 ease-in-out" href={NavbarMenuItem.link}>{NavbarMenuItem.title}</a>
                </li>
            ))}
            </ul>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-[16px] font-semibold">
            <a href="">Sign in</a>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full">Register</button>
        </div>

        {/* mobile */}
        <div className="lg:hidden text-2xl" onClick={toggleNavIcon}>
            {isOpen ? <FiMenu /> : <IoMdClose />}
        </div>
    </div>
    <ResponsiveMenu isOpen={isOpen} />
    <NavBanner />
    </>
  )
}

export default Navbar