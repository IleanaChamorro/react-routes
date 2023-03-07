import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import MenuConceptos from './MenuConceptos'

const ConceptosBasicos = () => {
  return (
    <div>
        <h2>Conceptos Básicos</h2>
        <Router>
        <MenuConceptos/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/acerca" component={Acerca}/>
                <Route exact path="/contacto" component={Contacto}/>
                <Route path="*" component={Error404}/>      
            </Switch>
        </Router>
    </div>
  )
}

/*
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
                      Declarar componentes 
                      <Acerca/>
                      <p>descripcion</p>
                  </Route>
                  Invocar  componentes
                  <Route exact path="/contacto" component={Contacto}/>
  
                  <Route exact path="/contacto" children={
                  <>
                  <Contacto/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque dolorem nihil dolores eveniet dolor pariatur explicabo consequatur dolorum facilis?</p>
                  </>
                  }
                  />
              </Switch>
          </Router>
      </div>
    )
}
*/
export default ConceptosBasicos