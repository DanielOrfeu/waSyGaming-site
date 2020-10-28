import React, {Component} from 'react'
import './Team.css'

class Teams extends Component {
    render() {
        return (
            <nav className="teamContent">
                {this.props.teamName} Content
                
            </nav>
        )
    }
}


export default Teams;