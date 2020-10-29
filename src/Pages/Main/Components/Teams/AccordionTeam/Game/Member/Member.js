import React, {Component} from 'react'
import './Member.css'

class Member extends Component {
    render() {
        return (
            <div className="memberContent">
                <p>{this.props.member.IGN}</p>
                <p>{this.props.member.name}</p>

            </div>
        )
    }
}


export default Member;