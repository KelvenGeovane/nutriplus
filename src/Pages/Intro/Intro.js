import React from 'react'
import img from '../../Images/img.png'
import up from '../../Images/Upar_vala.png'
import girl1 from '../../Images/pehli_ladki.png'
import girl2 from '../../Images/dusri_ladki.png'
import girl3 from '../../Images/tesri_ladki.png'
import './Intro.css'
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import Footer from '../../Components/Footer/footer'
import LoginModal from '../../Components/Modals/LoginModal'

function Intro() {
    return (
        <div className="intro" >
            <Fade top>
            <img id='up' src={up} style={{
                width: '100vw',
                top: '0'
            }} />
            </Fade>
            <div className="intro__main" >
                <Fade bottom>
                <div className="intro__text">
                    <h3>A boa forma começa com o que você come. </h3>
                    <Fade bottom delay={500}>
                    <p>
                        Assuma o controle de seus objetivos. Monitore calorias, divida ingredientes e registre atividades.
                    </p>
                    </Fade>
                    <Fade bottom delay={700}>
                    <Button id='trial__but' variant="filled" style={{ background: '#699DFF', fontFamily: 'Poppins, sans-serif', textTransform: 'capitalize', color: 'white', }}>
                        <LoginModal text="Comece grátis" border="none" color="white"/>
                    </Button>
                    </Fade>
                </div>
                </Fade>
                <Fade bottom delay={600}>
                {/* <div className="intro__image"> */}
                    <img src={img} alt="" style={{ margin: 'auto', height:'auto', width:'50vw'}} />
                {/* </div> */}
                </Fade>
            </div>
            <div className='tools'>
                <Fade bottom>
                <h1>Damos-lhe as ferramentas certas para atingir os seus objetivos</h1>
                </Fade>
                <div className='tools__cont'>
                    <Fade bottom delay={200}>
                    <div className="bada__dabba">
                        <div className='dabba'>
                            <img src={girl1} />
                        </div>
                        <p>ANALISE O QUE VOCÊ COME</p>
                    </div>
                    </Fade>
                    <Fade bottom delay={200}>
                    <div className="bada__dabba">
                        <div className='dabba'>
                            <img src={girl2} />
                        </div>
                        <p>ENCONTRE RECEITAS SAUDÁVEIS</p>
                    </div>
                    </Fade>
                    <Fade bottom delay={200}>
                    <div className="bada__dabba">
                        <div className='dabba'>
                            <img src={girl3} />
                        </div>
                        <p>PLANO. ACOMPANHAR. MELHORAR.</p>
                    </div>
                    </Fade>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Intro
