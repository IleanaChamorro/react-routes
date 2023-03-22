import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import MenuConceptos from './MenuConceptos'
import Usuario from '../pages/Usuario'
import Producto from '../pages/Producto'
import ReactTopics from '../pages/ReactTopics'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import PrivateRoute from '../pages/PrivateRoute'

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
                <Route exact path="/usuario/:username" component={Usuario}/>
                <Route exact path="/productos" component={Producto}/>  
                <Route exact path="/about">
                    <Redirect to="/acerca"/>
                </Route>
                <Route exact path="/contact">
                    <Redirect to="/contacto"/>
                </Route>
                <Route exact path="/react" component={ReactTopics}></Route>
                <Route exact path="/login" component={Login}></Route>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
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