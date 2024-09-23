import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-black text-white flex items-baseline px-4 py-2 justify-between">
      <h1 className="text-2xl">Head Logo</h1>
      <nav className="space-x-5">
        <NavLink to={'/about-page'}>About</NavLink>
        <NavLink to={'/contact-page'}>Contact</NavLink>
      </nav>
    </div>
  )
}
export default Header