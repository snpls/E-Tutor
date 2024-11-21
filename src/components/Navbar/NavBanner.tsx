import { useState } from "react";
import { IoClose } from "react-icons/io5";

const NavBanner = () => {
    const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={isOpen ? "grid" : "hidden"}>
    <div className="hidden bg-yellow-400 lg:flex items-center justify-center py-1 font-poppins relative">
        <div className='font-semibold text-[14px] flex items-center gap-2'>
            <h4>Are you a university or school student for an online tutoring partnership?</h4>
            <a className="text-blue-600" href="">Talk to us</a>
        </div>
        <IoClose className="absolute top-1/2 -translate-y-1/2 right-6 font-bold text-xl cursor-pointer" onClick={() => {setIsOpen(!isOpen)}} />
    </div>
    </div>
  )
}

export default NavBanner