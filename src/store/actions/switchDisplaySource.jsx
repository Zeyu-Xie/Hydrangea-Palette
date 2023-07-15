import zhongguose from "../../zhongguose.json"
import css_default from "../../default.json"
import others from "../../others.json"

function switchDisplaySource(dispatch) {
    return {
        switchDisplaySource: (displaySource) =>{
            let displaySourceFile=""
            switch (displaySource) {
                case "zhongguose": {
                    displaySourceFile = zhongguose
                    break
                }
                case "css_default": {
                    displaySourceFile = css_default
                    break
                }
                case "others": {
                    displaySourceFile = others
                    break
                }
                default:
                    break
            }
            dispatch({
                type: "SWITCH_DISPLAY_SOURCE",
                displaySource: displaySource,
                displayColor: displaySourceFile[0]["name_en"]
            })

        } 
    }
}

export default switchDisplaySource