import React, {Component} from 'react'
import './Game.css'
import Member from './Member/Member';

class Game extends Component {
    render() {
        return (
            <div className="gameContent">
                <b>{this.props.title}</b>
                <div className="memberList">
                    {
                        this.props.members.map(member => {
                            return (
                                <Member member={member}></Member>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Game;