import React, { Component } from 'react'
import './Footer.css'

import waSy1Logo from '../../../../Assets/Images/wasyLogos/logo completa 2.png'
import waSy2Logo from '../../../../Assets/Images/wasyLogos/logo plus completa.png'
import waSy3Logo from '../../../../Assets/Images/wasyLogos/logo girls completa.png'


class Footer extends Component {
    render() {
        return (
            <div className="footerContent">
                <div className="footerLogos">
                    <img className="wasyFooterLogos" src={waSy1Logo} alt="footerIMG"></img>
                    <img className="wasyFooterLogos" src={waSy2Logo} alt="footerIMG"></img>
                    <img className="wasyFooterLogos" src={waSy3Logo} alt="footerIMG"></img>
                </div>

                <div className="textsFooter">
                    <i>"Uma organização onde o trabalho de equipe vai além das competoções"</i>

                </div>
                <div className="textsFooter">
                    © 2015-2020 por waSy Gaming. Todos os direitos reservados.
                </div>
                <div className="textsFooter">
                    By: Daniel "DaNN" Orfeu
                </div>

            </div>
        )
    }
}


export default Footer;