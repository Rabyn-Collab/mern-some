import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-black text-white">
      <h1>Head Logo</h1>
      <nav>
        <NavLink to={'/about-page'}>About</NavLink>
        <NavLink to={'/contact-page'}>Contact</NavLink>
      </nav>
    </div>
  )
}
export default Header