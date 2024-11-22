import '../Styles/SectionInfos.css'
import LogoLaranja from '../../img/logolaranja.png'

function SectionInfos() {
    return (
      <>
      <section>
        <h3 className='TituloInicial'>3 passo simples para começar a aprender</h3>
        <div className='BoxInfos'>
          <div className='BoxPasso'>
            <div className='TituloLogo'>
              <img className='LogoImg' src={LogoLaranja} alt=""/>
              <h2 className='TitlePassos'>Pesquise cursos</h2>
            </div>
            <p className='DescPassos'>Encontre o curso que você precisa para avançar na sua carreira.</p>
          </div>
          <div className='BoxPasso'>
            <div className='TituloLogo'>
              <img className='LogoImg' src={LogoLaranja} alt=""/>
              <h2 className='TitlePassos'>Matricule-se</h2>
            </div>
            <p className='DescPassos'>Inscreva-se oficialmente e obtenha acesso imediato.</p>
          </div>
          <div className='BoxPasso'>
            <div className='TituloLogo'>
              <img className='LogoImg' src={LogoLaranja} alt=""/>
              <h2 className='TitlePassos'>Comece a aprender</h2>
            </div>
            <p className='DescPassos'>Aprenda no seu próprio ritmo onde e quando quiser.</p>
          </div>
        </div>
      </section>
      </>
    )
  }
  
  export default SectionInfos