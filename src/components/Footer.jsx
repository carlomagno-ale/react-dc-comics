export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>DC COMICS</h3>
                        <ul>
                            <li><a href="/characters">Characters</a></li>
                            <li><a href="/comics">Comics</a></li>
                            <li><a href="/movies">Movies</a></li>
                            <li><a href="/tv">TV</a></li>
                            <li><a href="/games">Games</a></li>
                            <li><a href="/videos">Videos</a></li>
                            <li><a href="/news">News</a></li>
                        </ul>
                        <h3>SHOP</h3>
                        <ul>
                            <li><a href="/shopdc">Shop DC</a></li>
                            <li><a href="/shopcollect">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>DC</h3>
                        <ul>
                            <li><a href="/terms">Terms of Use</a></li>
                            <li><a href="/privacy">Privacy Policy (New)</a></li>
                            <li><a href="/adchoices">Ad Choices</a></li>
                            <li><a href="/advertising">Advertising</a></li>
                            <li><a href="/jobs">Jobs</a></li>
                            <li><a href="/subscriptions">Subscriptions</a></li>
                            <li><a href="/talentworkshops">Talent Workshops</a></li>
                            <li><a href="/cpsc">CPSC Certificates</a></li>
                            <li><a href="/ratings">Ratings</a></li>
                            <li><a href="/shophelp">Shop Help</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>SITES</h3>
                        <ul>
                            <li><a href="/madmagazine">MAD Magazine</a></li>
                            <li><a href="/dckids">DC Kids</a></li>
                            <li><a href="/dcuniverse">DC Universe</a></li>
                            <li><a href="/dcvisa">DC Power Visa</a></li>
                        </ul>
                    </div>
                    <div className="overlay-logo"></div>
                </div>
            </div>
            <div className="footer-bottom">
                <button className="sign-up-btn">SIGN-UP NOW!</button>
                <div className="social-icons">
                    <span>FOLLOW US</span>
                    <a href="#"><img src='/img/footer-facebook.png' alt="facebook" /></a>
                    <a href="#"><img src='/img/footer-twitter.png' alt="twitter" /></a>
                    <a href="#"><img src='/img/footer-youtube.png' alt="youtube" /></a>
                    <a href="#"><img src='/img/footer-pinterest.png' alt="pinterest" /></a>
                    <a href="#"><img src='/img/footer-periscope.png' alt="periscope" /></a>
                </div>
            </div>
        </footer >
    );
}