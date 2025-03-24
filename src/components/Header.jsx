import menuLinks from "../data/mainMenu"

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

function Nav() {

    return (
        <nav className="menu-nav">
            <ul>
                {menuLinks.map(link => (
                    <li key={link.id}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}