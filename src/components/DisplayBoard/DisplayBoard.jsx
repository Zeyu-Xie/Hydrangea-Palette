import React from "react"
import { connect } from "react-redux"
import data from "../../data.json"
import "./DisplayBoard.css"

class DisplayBoard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            color: {}
        }
        this.getColorInfo = this.getColorInfo.bind(this)
    }

    componentDidMount() {
        this.getColorInfo()
    }

    render() {
        return (
            <div id="displayBoard" className="container-fluid">
                {
                    this.props.displayColor && this.props.displayColor
                }
            </div>
        )
    }

    getColorInfo = () => {
        const color = data.find((item) => {
            return item["name_en"] === this.props.displayColor
        })
        this.setState({
            color: color ? color : {}
        })
    }

}

const mapStateToProps = (state) => {
    return {
        displayColor: state.displayColor
    }
}

export default connect(mapStateToProps)(DisplayBoard)