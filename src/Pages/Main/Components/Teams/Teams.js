import React, { Component } from 'react'
import AccordionTeam from './AccordionTeam/AccordionTeam';
import './Teams.css'

import waSy1Logo from '../../../../Assets/Images/wasyLogos/mascote azul 2.png'
import waSy2Logo from '../../../../Assets/Images/wasyLogos/mascote plus.png'
import waSy3Logo from '../../../../Assets/Images/wasyLogos/mascote girls.png'



class Teams extends Component {
    render() {
        return (
            <div className="teamsContent">
                <AccordionTeam
                    title="WASY GAMING"
                    content="
                        <p>waSy Gaming Content.</p>
                        "
                    pattern="gaming"
                    logo={waSy1Logo}
                />
                <AccordionTeam
                    title="WASY PLUS"
                    content="
                        <p>waSy Plus Content.</p>
                        "
                    pattern="plus"
                    logo={waSy2Logo}
                />
                <AccordionTeam
                    title="WASY GIRLS"
                    content="
                        <p>waSy Girls Content.</p>
                        "
                    pattern="girls"
                    logo={waSy3Logo}
                />
            </div>
        )
    }
}


export default Teams;