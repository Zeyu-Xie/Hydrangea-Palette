import React from "react"
import { connect } from "react-redux"
import zhongguose from "../../zhongguose.json"
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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.displayColor !== this.props.displayColor) {
            this.getColorInfo()
        }
    }

    render() {
        return (
            <div id="displayBoard" className="container-fluid">
                {
                    this.state.color["name_en"] && this.state.color["name_en"]
                }
                <br />
                {
                    this.state.color["name_zh"] && this.state.color["name_zh"]
                }
                <br />
                {
                    this.state.color.hex && this.state.color.hex
                }
                <br />
                {
                    this.state.color.label && this.state.color.label
                }
            </div>
        )
    }

    getColorInfo = () => {
        const color = zhongguose.find((item) => {
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