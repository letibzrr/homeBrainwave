import '../Styles/App.css'
import Navbar from './Navbar.jsx'
import SectionIntro from './SectionIntro.jsx'
import Carrossel from './Carrossel.jsx'
import SectionInfos from './SectionInfos.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <SectionIntro/>
      <Carrossel/>
      <SectionInfos/>
      <Footer/>
    </>
  )
}

export default App