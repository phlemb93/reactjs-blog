import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <h3>Blog Logo</h3>
        </div>
        <nav className="nav-items">
            <Link to="/">
            Home
            </Link>
            <Link to="/create">
            New Blog
            </Link>
        </nav>
    </div>

  )
}

export default NavBar;