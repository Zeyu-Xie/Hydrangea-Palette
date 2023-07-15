import React from "react"
import zhongguose from "../../zhongguose.json"
import css_default from "../../default.json"
import others from "../../others.json"
import "./ChartView.css"
import { connect } from "react-redux"
import switchDisplayColor from "../../store/actions/switchDisplayColor"

class ChartView extends React.Component {
    render() {
        return (
            <div id="ChartView" className="container-fluid">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Exp</th>
                            <th scope="col">Name_EN</th>
                            <th scope="col">Name_ZH</th>
                            <th scope="col">RGB</th>
                            <th scope="col">HEX</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.displaySource === "zhongguose" && zhongguose.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row" className="align-middle">{index + 1}</th>
                                        <td style={{ color: "#" + item.hex, fontWeight: "1000", fontSize: "xx-large" }} onClick={() => {
                                            this.props.switchDisplayColor(item["name_en"])
                                        }}>——</td>
                                        <td>{item.name_en}</td>
                                        <td>{item.name_zh}</td>
                                        <td>{`(${item.rgb.red}, ${item.rgb.green}, ${item.rgb.blue})`}</td>
                                        <td>{item.hex}</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            this.props.displaySource === "css_default" && css_default.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row" className="align-middle">{index + 1}</th>
                                        <td style={{ color: "#" + item.hex, fontWeight: "1000", fontSize: "xx-large" }} onClick={() => {
                                            this.props.switchDisplayColor(item["name_en"])
                                        }}>——</td>
                                        <td>{item.name_en}</td>
                                        <td>{item.name_zh}</td>
                                        <td>{`(${item.rgb.red}, ${item.rgb.green}, ${item.rgb.blue})`}</td>
                                        <td>{item.hex}</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            this.props.displaySource === "others" && others.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row" className="align-middle">{index + 1}</th>
                                        <td style={{ color: "#" + item.hex, fontWeight: "1000", fontSize: "xx-large" }} onClick={() => {
                                            this.props.switchDisplayColor(item["name_en"])
                                        }}>——</td>
                                        <td>{item.name_en}</td>
                                        <td>{item.name_zh}</td>
                                        <td>{`(${item.rgb.red}, ${item.rgb.green}, ${item.rgb.blue})`}</td>
                                        <td>{item.hex}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        displaySource: state.displaySource,
        displayColor: state.displayColor
    }
}

export default connect(mapStateToProps, switchDisplayColor)(ChartView)