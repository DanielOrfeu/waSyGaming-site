import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './About.css'

class About extends Component {
    render() {
        return (
            <div className="aboutContent">
                <h2>SOBRE A WASY</h2>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work timeLineText"
                        date="Outubro 2015"
                        dateClassName="timeLineDate"
                        iconClassName="timeLineIcon"
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">O início de tudo</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                        <p>A waSy Gaming foi criada aproximadamente em Outubro de 2015 com o nome Legacy Gaming, por seu atual player e administrador Daniel "DaNN" Orfeu, com o objetivo inicial da criação de uma line-up para competições de CrossFire AL.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work timeLineText"
                        date="Março 2016"
                        dateClassName="timeLineDate"
                        iconClassName="timeLineIcon"
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Pequeno contratempo</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                        <p>Devido à direitos autorais sobre o nome Legacy Gamimg, a organização teve suas atividades competitivas interrompidas e seu time desfeito para criação de um novo nome, que foi definido em Março de 2016.</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work timeLineText"
                        date="Agosto 2016 - Junho 2020 - Atualmente"
                        dateClassName="timeLineDate"
                        iconClassName="timeLineIcon"
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Mudança visual</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                        <p>Em agosto de 2016 foi feita a recriação de sua logo, que se manteve até Junho de 2020. Após isso, a identidade visual da waSy passou por uma reformulação de sua logo e em Outubro de 2020, o site.</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <p className="aboutText">
                    O significado do nome waSy é: <u>w</u>e <u>a</u>re the <u>S</u>ingularit<u>y</u>, que em tradução livre quer dizer: "Nós somos a singularidade" (algo único, distinto, original), assim mostrando que viemos com determinação e garra para deixarmos nossa marca nos cenários competitivos.
                </p>
                <p className="aboutText">
                    Atualmente, waSy Gaming é uma organização amadora que contém projetos para criar um time principal (waSy Gaming), um time feminino (waSy Girls) e um time secundário/misto (waSy Plus) para ingressar no cenário competitivo de três jogos: Counter-Strike: Global Offensive (CS GO), CrossFire América Latina (CF AL) e League of Legends (LoL).
                </p>
                <p className="aboutText">
                    Tem algo a nos dizer ou tem interesse em participar da organização? 
                </p>
                <button className="aboutButton">Contate-nos</button>
            </div>
        )
    }
}


export default About;