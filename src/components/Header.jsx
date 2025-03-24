/*import menuLinks from "../data/mainMenu";*/
import Logo from "./Logo"
import Nav from "./Nav"

export default function Header({ menuLinks }) {

    return (
        <header className="header">
            <Logo />
            <Nav menuLinks={menuLinks} />
        </header>
    );
}

