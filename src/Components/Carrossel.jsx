import React, { useState, useEffect } from 'react';
import '../Styles/Carrossel.css';
import LogoLaranja from '../../img/logolaranja.png'

function Carrossel() {
  const capacidadesTxt = [
    { TitleCapacidade: "Mediação da aprendizagem", DescCapacidade: "Apoiar, guiar, inspirar: nossa missão é ser seu parceiro no processo de aprendizado." },
    { TitleCapacidade: "Interdisciplinaridade", DescCapacidade: "Quebre barreiras: aprenda a unir saberes e potencialize suas habilidades!" },
    { TitleCapacidade: "Contextualização", DescCapacidade: "Vincule teoria à prática: aprenda a aplicar o conhecimento no mundo real!" },
    { TitleCapacidade: "Ênfase no aprender a aprender", DescCapacidade: "Desperte sua curiosidade: o conhecimento é um caminho contínuo a ser explorado!" },
    { TitleCapacidade: "Proximidade entre o mundo do trabalho e as práticas sociais", DescCapacidade: "Prepare-se para a vida real: experiências autênticas que fazem a diferença no seu futuro profissional." },
    { TitleCapacidade: "Integração entre teoria e prática", DescCapacidade: "Aprenda de forma completa: a integração de saberes é o caminho para a excelência." },
    { TitleCapacidade: "Incentivo ao pensamento criativo e á inovação", DescCapacidade: "Inovação começa com o pensar diferente: explore, questione e crie!" },
    { TitleCapacidade: "Aprendizagem significativa", DescCapacidade: "Dê sentido ao conhecimento: conecte suas experiências à prática profissional!" },
    { TitleCapacidade: "Avaliação da aprendizagem", DescCapacidade: "Monitore seu progresso: refletir e redirecionar é parte do caminho para o sucesso." },
    { TitleCapacidade: "Incentivo ao uso de tecnologias educacionais", DescCapacidade: "Tecnologia que transforma: potencialize seu aprendizado com ferramentas inovadoras!" },
  ];

  const [capaciade, setCapacidade] = useState(0);

  const proximoItem = () => {
    setCapacidade((prevCapacidade) => (prevCapacidade + 1) % capacidadesTxt.length); 
  };

  useEffect(() => {
    const intervalo = setInterval(proximoItem, 3000);
    return () => clearInterval(intervalo); 
  }, []);

  return (
    <section className='CarrosselBox'>
      <h3 className='TituloInicial'>A jornada da aprendizagem leva à transformação!</h3>
      <h4 className='TituloCapacidade'>Desenvolvimento de capacidades:</h4>
      <div className='Carrossel'>
          <div className='TituloLogo'>
            <img className='LogoImg' src={LogoLaranja} alt=""/>
            <h2 className='TitleCapacidade'>{capacidadesTxt[capaciade].TitleCapacidade}</h2>
          </div>
          <p className='DescCapacidade'>{capacidadesTxt[capaciade].DescCapacidade}</p>
        </div>
    </section>
  );
}

export default Carrossel;
