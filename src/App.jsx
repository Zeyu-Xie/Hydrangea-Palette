import React from "react"
import { connect } from "react-redux"
import zhongguose from "./zhongguose.json"
import DisplayBoard from "./components/DisplayBoard/DisplayBoard"
import ChartView from "./components/ChartView/ChartView"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"

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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.displayColor !== this.props.displayColor) {
            this.getColorInfo()
        }
    }

    render() {
        return (
            <div id="App" className="container-fluid" style={{ backgroundColor: "#" + this.state.color.hex }}>
                <Navbar />
                <div className="row">
                    <div className="d-flex container-fluid col-12 col-md-5 justify-content-center">
                        <DisplayBoard />
                    </div>
                    <div id="ChartView-box" className="container-fluid col-12 col-md-7">
                        <ChartView />
                    </div>
                </div>
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

export default connect(mapStateToProps)(App)