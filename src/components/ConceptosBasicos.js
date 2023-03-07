import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const ConceptosBasicos = () => {
  return (
    <div>
        <h2>Conceptos Básicos</h2>
        <Router>
            <Switch>
                <Route exact path="/">
                    <h3>Home</h3>
                    <p>Rutas en React</p>
                </Route>
                <Route exact path="/acerca">
                    <h3>Acerca</h3>
                </Route>
                <Route exact path="/contacto">
                    <h3>Contacto</h3>
                </Route>
            </Switch>
        </Router>
    </div>
  )
}

export default ConceptosBasicos