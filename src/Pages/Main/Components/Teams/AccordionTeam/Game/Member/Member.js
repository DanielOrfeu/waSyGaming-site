import React, {Component} from 'react'
import './Member.css'

class Member extends Component {
    render() {
        return (
            <div className="memberContent">
                <b><p>{this.props.member.IGN}</p></b>
                <p>{this.props.member.name}</p>
                <p>{this.props.member.role}</p>
            </div>
        )
    }
}


export default Member;