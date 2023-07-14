function switchDisplayColor(dispatch) {
    return {
        switchDisplayColor: (displayColor) => dispatch({
            type: "SWITCH_DISPLAY_COLOR",
            displayColor: displayColor
        })
    }
}

export default switchDisplayColor