
import Nav from "./Nav"

export default function Header() {

    return (
        <header className="header">

            <div className="logo">
                <img src="/img/dc-logo.png" alt="DC Logo" />
            </div>

            <Nav />
        </header>

    );
}

