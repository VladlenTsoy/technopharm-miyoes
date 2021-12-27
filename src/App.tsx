import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/home"
import Miosta from "./pages/miosta"
import Mioyes from "./pages/mioyes"

const App = () => {
    return (
        <div style={{width: "100%", overflowX: "hidden"}}>
            <Router>
                <Switch>
                    <Route path="/" exact children={<Home />} />
                    <Route path="/mioyes" exact children={<Mioyes />} />
                    <Route path="/miosta" children={<Miosta />} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
