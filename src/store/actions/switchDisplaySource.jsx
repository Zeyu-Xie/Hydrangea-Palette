function switchDisplaySource(dispatch) {
    return {
        switchDisplaySource: (displaySource) => dispatch({
            type: "SWITCH_DISPLAY_SOURCE",
            displaySource: displaySource
        })
    }
}

export default switchDisplaySource