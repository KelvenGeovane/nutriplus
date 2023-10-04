import React from "react";
import "./AboutUs.css";
import ellipse from '../../Images/Ellipse.png'
import ana from '../../Images/ana.png'
import matheus from '../../Images/matheus.png'
import marco from '../../Images/marco.png'
import lucas from '../../Images/lucas.png'
import felipe from '../../Images/felipe.png'
import geovane from '../../Images/geovane.png'
import Footer from '../../Components/Footer/footer'

function AboutUs() {

  return (
    <div className="aboutus__screen " style={{ maxWidth: "100vw" }}>
        <div className="aboutus__head">
          <h1>Sobre nós</h1>
        </div>

        <h1 className="container__head">Nosso foco</h1>
        <div className="container">
        
          <p className="content">Nossa plataforma oferece informações confiáveis ​​para ajudá-lo a fazer escolhas alimentares saudáveis. Estamos desenvolvendo um site goto para pessoas obcecadas por exercícios físicos, que contam calorias e hesitam em comer guloseimas de dar água na boca. Nosso objetivo é garantir que as pessoas saibam o que comem e quanto precisam para o dia. Este é um lugar saudável para as pessoas, pois elas estão cercadas por nutricionistas de classe mundial que lhes dão opiniões e prescrevem planos de dieta para trabalhar com sua rotina, tudo embalado em um só negócio. 
            <br /><br />
            Nosso objetivo é ajudar os usuários a encontrar receitas perfeitas para si próprios. Os usuários podem definir metas e seguir os melhores planos de dieta para obter benefícios gerais para a saúde. Usamos os melhores bancos de dados de alimentos da Internet para fornecer detalhes sobre a quantidade de nutrientes, vitaminas etc.</p>
        <div className="img-cont">
          <img class="girl-img" src={ellipse} alt="" />
          </div>
          </div>

        <section className="team__front">
          <div className="section_container">
            <div className="section_header">
            <h1 className="container__head">Front-end Team</h1>
            </div>

            <div className="wrapper">
              <div className="object">
                <div className="imgbox"><img src={ana} alt="" /></div>
                <div className="text">
                Ana Beatriz<br />ID - 201801005
                </div>
              </div>

              <div className="object">
                <div className="imgbox"><img src={matheus} alt="" /></div>
                <div className="text">
                Matheus Moreira<br />ID - 201801139
                </div>
              </div>

              <div className="object">
                <div className="imgbox"><img src={marco} alt="" /></div>
                <div className="text">
                Marco Antonio<br />ID - 201801177
                </div>
              </div>

              <div className="object">
                <div className="imgbox"><img src={lucas} alt="" /></div>
                <div className="text">
                Lucas Gabriel<br />ID - 201801472
                </div>
              </div>
              </div>

              <div className="wrapper">
              <div className="object">
                <div className="imgbox"><img src={felipe} alt="" /></div>
                <div className="text">
                Felipe Hsu<br />ID - 201801420
                </div>
              </div>

              <div className="object">
                <div className="imgbox"><img src={geovane} alt="" /></div>
                <div className="text">
                Geovane Kelven<br />ID - 201801072
                </div>
              </div>
              </div>

          </div>
        </section>

        <section className="team__backend">
          <div className="section_container">
            <div className="section_header">
            <h1 className="container__head">Back-end Team</h1>
            </div>

            <div className="wrapper">
              <div className="object">
                <div className="imgbox"><img src={ana} alt="" /></div>
                <div className="text">
                Kushagra Pathak<br />ID - 201801005
                </div>
              </div>

              <div className="object">
                <div className="imgbox"><img src={ana} alt="" /></div>
                <div className="text">
                Tanishqa Lalwani<br />ID - 201801139
                </div>
              </div>

              <div className="object">

                <div className="imgbox"><img src={ana} alt="" /></div>
                <div className="text">
                Rushi Rajpara<br />ID - 201801410
                </div>
              </div>

              <div className="object">
                <div className="imgbox"><img src={ana} alt="" /></div>
                <div className="text">
                Akshar Rughani<br />ID - 201801149
                </div>
              </div>
              
            </div>
          </div>
        </section>
    <Footer/>
</div>
);
}

export default AboutUs;
