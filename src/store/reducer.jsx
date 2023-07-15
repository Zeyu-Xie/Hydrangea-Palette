const initState = {
    displaySource: "zhongguose",
    displayColor: "anyuzi"
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SWITCH_DISPLAY_COLOR": 
            return {
                ...state,
                displayColor: action.displayColor
            }
        case "SWITCH_DISPLAY_SOURCE":
            return {
                ...state,
                displaySource: action.displaySource
            }
        default:
            return state
    }
}

export default reducer