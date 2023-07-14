import React from "react"
import { connect } from "react-redux"
import data from "./data.json"
import DisplayBoard from "./components/DisplayBoard/DisplayBoard"
import ChartView from "./components/ChartView/ChartView"
import "./App.css"

class App extends React.Component {

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
            <div id="App" className="container-fluid" style={{backgroundColor: "#"+this.state.color.hex}}>
                <div className="row">
                    <div className="container-fluid col-12 col-md-5">
                        <DisplayBoard />
                    </div>
                    <div className="container-fluid col-12 col-md-7">
                        <ChartView />
                    </div>
                </div>
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

export default connect(mapStateToProps)(App)