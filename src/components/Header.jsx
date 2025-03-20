export default function Header() {

    return (
        <header className="header">

            <div className="logo">
                <img src="/img/dc-logo.png" alt="DC Logo" />
            </div>
            <nav className="menu-nav">
                <ul>
                    <li><a href="#">characters</a></li>
                    <li><a href="#">comics</a></li>
                    <li><a href="#">movies</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">games</a></li>
                    <li><a href="#">collectibles</a></li>
                    <li><a href="#">videos</a></li>
                    <li><a href="#">fans</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">shop</a></li>
                </ul>
            </nav>

        </header>

    );
}