import { Link } from "react-router-dom"

function Header() {

  return (
    <>
      <header className="header-layout1">
        <div className=""><h2>Workshop Sprint 1</h2></div>
        <nav className="nav-bar">
          <span className="nav-item"><Link to='/'>Home</Link></span>
          <span className="nav-item"><Link to='/about'>About</Link></span>
        </nav>
      </header>
    </>
  )
}

export default Header