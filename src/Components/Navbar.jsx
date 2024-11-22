import LogoBranca from '../../img/logobranca.png'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <>
    <section className='NavbarBox'>
      <div className='LogoBox'>
        <img className='LogoImg' src={LogoBranca} alt=""/>
        <p className='LogoName'>BrainWave</p>
      </div>
      <a className='LinkNavbar' href=""><p className='LinkPage'>Cursos</p></a>
      <a className='LinkNavbar' href=""><p className='LinkPage'>Contato</p></a>
      <a className='LinkNavbar' href=""><p className='LinkPage'>Ajuda</p></a>
      <button className='ButtonLogin'>Login</button>
      <button className='ButtonCadastro'>Cadastro</button>
    </section>
    </>
  )
}

export default Navbar