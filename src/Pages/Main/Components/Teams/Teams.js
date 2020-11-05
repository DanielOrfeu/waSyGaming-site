import React, { Component } from 'react'
import AccordionTeam from './AccordionTeam/AccordionTeam';
import './Teams.css'

import waSy1Logo from '../../../../Assets/Images/wasyLogos/mascote azul 2.png'
import waSy2Logo from '../../../../Assets/Images/wasyLogos/mascote plus.png'
import waSy3Logo from '../../../../Assets/Images/wasyLogos/mascote girls.png'
import teamsInfos from './TeamsInfos.json'

const arrImages = [waSy1Logo, waSy2Logo, waSy3Logo]



class Teams extends Component {
    render() {
        return (
            <div className="teamsContent">
                {
                    teamsInfos.teams.map((team, i) => {
                        return (
                            <AccordionTeam
                                title={team.title}
                                pattern={team.pattern}
                                logo={arrImages[i]}
                                idTeam={i}
                                key={i}
                            />
                        )
                    })
                }
            </div>
        )
    }
}


export default Teams;