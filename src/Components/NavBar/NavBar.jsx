import "./NavBar.scss"

const NavBar = () => {
    return (
        <div className="Nav-Container">
            <div className="My-Name">
                <p>Isaac Malin</p>
            </div>
            <nav className="Nav-Bar">
                <p>About Me</p>
                <p>My Work</p>
            </nav>
        </div>
    )
}

export default NavBar;