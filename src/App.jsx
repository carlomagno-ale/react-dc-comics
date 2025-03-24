import Header from './components/Header'
import Main from './components/Main'
import IconsNav from './components/IconsNav'
import Footer from './components/Footer'
import menuLinks from './data/mainMenu'
import comics from './data/comics'

function App() {

  return (
    <>
      <Header menuLinks={menuLinks} />
      <Main comics={comics} />
      <IconsNav />
      <Footer />
    </>
  )
}

export default App

