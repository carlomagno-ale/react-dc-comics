import menuLinks from "../data/mainMenu"

export default function Nav() {

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