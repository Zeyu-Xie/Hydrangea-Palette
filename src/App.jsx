import React from "react"
import { connect } from "react-redux"
import zhongguose from "./zhongguose.json"
import css_default from "./default.json"
import others from "./others.json"
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
        if (prevProps !== this.props) {
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
        switch (this.props.displaySource) {
            case "zhongguose": {
                const color = zhongguose.find((item) => {
                    return item["name_en"] === this.props.displayColor
                })
                this.setState({
                    color: color ? color : {}
                })
                return
            }
            case "css_default": {
                const color = css_default.find((item) => {
                    return item["name_en"] === this.props.displayColor
                })
                this.setState({
                    color: color ? color : {}
                })
                return
            }
            case "others": {
                const color = others.find((item) => {
                    return item["name_en"] === this.props.displayColor
                })
                this.setState({
                    color: color ? color : {}
                })
                return
            }
            default: {
                return
            }
        }

    }
}

const mapStateToProps = (state) => {
    return {
        displayColor: state.displayColor,
        displaySource: state.displaySource
    }
}

export default connect(mapStateToProps)(App)