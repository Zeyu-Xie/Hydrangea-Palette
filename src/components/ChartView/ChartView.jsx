import React from "react"
import data from "../../data.json"
import "./ChartView.css"
import { connect } from "react-redux"

class ChartView extends React.Component {
    render() {
        return (
            <div id="chartView" className="container-fluid">
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <li>{item.hex}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        displayColor: state.displayColor
    }
}

export default connect(mapStateToProps)(ChartView)