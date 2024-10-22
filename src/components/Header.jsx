import { NavLink } from "react-router-dom"
import { FaBars, FaClosedCaptioning, FaCross } from "react-icons/fa6";
import { useState } from "react";
import { FaCrown } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }
  return (
    <div className="bg-black text-white flex items-baseline px-4 py-2 justify-between ">

      <div>
        <h1 className="text-2xl">Head Logo</h1>
        {show && <nav className="space-y-1 hidden mt-2 sm:flex flex-col">
          <NavLink to={'/about-page'}>About</NavLink>
          <NavLink to={'/contact-page'}>Contact</NavLink>
        </nav>}
      </div>



      <button onClick={handleShow}>

        {show ? <FaCrown className="hidden sm:flex" /> : <FaBars className="hidden sm:flex" />}
      </button>


      <nav className="space-x-5 sm:hidden">
        <NavLink to={'/add-form'}>AddForm</NavLink>
        <NavLink to={'/contact-page'}>Contact</NavLink>
      </nav>


    </div>
  )
}
export default Header