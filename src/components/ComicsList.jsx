import Card from './Card/Card.jsx';
import comics from '../data/comics.js';

export default function ComicsList() {

    return (
        <section>

            <div className='jumbotron'>
            </div>

            <div className='main-container'>

                <button className='section-title'>
                    <h2>Current Series</h2>
                </button>

                <div className="row">

                    {comics.map(comic => (
                        <Card key={comic.id} image={comic.thumb} title={comic.title} />
                    ))}

                </div>

                <div className='load-btn-container'>
                    <button className="load-btn">Load More</button>
                </div>
            </div>
        </section>
    )
}