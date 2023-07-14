const initState = {
    displayColor: "anyuzi"
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SWITCH_DISPLAY_COLOR": 
            return {
                ...state,
                displayColor: action.displayColor
            }
        default:
            return state
    }
}

export default reducer