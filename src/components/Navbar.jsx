import { Link } from "react-router"

function Navbar() {
    return (
        <nav className="nav container" aria-label="Primary navigation">
            <Link to="#home" className="logo" aria-label="Go to homepage">Patricia Ann Comendador</Link>

            <button className="nav-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className="nav-links" id="navLinks">
                <Link to="#projects">Projects</Link>
                <Link to="#skills">Skills</Link>
                <Link to="#about">About</Link>
                <Link to="#contact">Contact</Link>
                <button className="theme-toggle" type="button" aria-label="Toggle dark mode">Dark</button>
            </div>
        </nav>
    )
}

export default Navbar