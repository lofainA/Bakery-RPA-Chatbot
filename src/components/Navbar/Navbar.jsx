import NavbarButton from "../NavbarButton/NavbarButton";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src="./logo.png" 
                 className="logo"/>
            <div className="navbar">
                <NavbarButton text="Home" />
                <NavbarButton text="About" /> 
                <NavbarButton text="Menu" />
                <NavbarButton text="Contact" />
            </div>
        </div>
    );
}

export default Navbar;