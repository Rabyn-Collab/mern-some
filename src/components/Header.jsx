import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-black text-white flex items-baseline px-4 py-2 justify-between ">

      <h1 className="text-2xl">Head Logo</h1>
      <FaBars className="hidden sm:flex" />
      <nav className="space-x-5 sm:hidden">
        <NavLink to={'/about-page'}>About</NavLink>
        <NavLink to={'/contact-page'}>Contact</NavLink>
      </nav>
    </div>
  )
}
export default Header