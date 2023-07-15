import React from "react"

import "./Navbar.css"
import { connect } from "react-redux"
import switchDisplaySource from "../../store/actions/switchDisplaySource"

class Navbar extends React.Component {
    render() {
        return (
            <div id="Navbar" className="dropdown">
                <button id="Navbar-button" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Source
                </button>
                <ul id="Navbar-dropdown" className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={() => {
                        this.props.switchDisplaySource("zhongguose")
                    }}>zhongguose</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => {
                        this.props.switchDisplaySource("css_default")
                    }}>css_default</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => {
                        this.props.switchDisplaySource("others")
                    }}>others</a></li>
                </ul>
            </div>
        )
    }
}

export default connect(null, switchDisplaySource)(Navbar)