import React from "react"
import ReacrDOM from "react-dom"
import store from "./store/store"
import { Provider } from "react-redux"
import App from "./App"

ReacrDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root")
)