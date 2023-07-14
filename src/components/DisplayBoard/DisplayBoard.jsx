import React from "react"
import { connect } from "react-redux"
import zhongguose from "../../zhongguose.json"
import "./DisplayBoard.css"
import config from "../../config.json"

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
            <div id="displayBoard" className="d-flex align-items-center">

                <div id="displayBoard-subbox" className="container pb-5">
                    {
                        this.state.color["name_en"] && <h1 id="name_en" style={{ textTransform: "uppercase" }}>{this.state.color["name_en"]}</h1>
                    }
                    <br />
                    <blockquote id="displayBoard-subbox-info">
                        {
                            this.state.color["name_zh"] && <p id="name_zh">- {this.state.color["name_zh"]}</p>
                        }
                        {
                            this.state.color["rgb"] && <p id="rgb">- {
                                "(" + this.state.color.rgb.red + ", " + this.state.color.rgb.green + ", " + this.state.color.rgb.blue + ")"
                            }</p>
                        }
                        {
                            this.state.color.hex && <p id="hex">- {this.state.color.hex}</p>
                        }
                        {
                            this.state.color.label && <cite id="label">- <a href={config.urls.zhongguose}>{this.state.color.label}</a></cite>
                        }
                    </blockquote>
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

export default connect(mapStateToProps)(DisplayBoard)