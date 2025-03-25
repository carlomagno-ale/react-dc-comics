import ComicsList from "./ComicsList"

export default function Main({ comics }) {

    console.log(comics)

    return (
        <main className="main">
            <ComicsList comics={comics} />
        </main>
    )
}

