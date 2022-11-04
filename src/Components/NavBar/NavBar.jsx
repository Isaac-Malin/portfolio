import "./NavBar.scss"

const NavBar = () => {
    return (
        <div className="Nav-Container">
            <div className="My-Name">
                <h1 className="links">Isaac Malin</h1>
            </div>
            <nav className="Nav-Bar">
                <button className="links1">About Me</button>
                <button className="links1">My Work</button>
            </nav>
        </div>
    )
}

export default NavBar;