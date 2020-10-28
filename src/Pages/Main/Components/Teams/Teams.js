import React, {Component} from 'react'
import './Teams.css'
import Team from './Team/Team' 

class Teams extends Component {
    render() {
        return (
            <nav className="teamsContent">
                Teams Content
                <Team teamName="waSyGaming"></Team>
                <Team teamName="waSyPlus"></Team>
                <Team teamName="waSyGirls"></Team>
            </nav>
        )
    }
}


export default Teams;