import React from 'react'
import {
    Link, 
    Switch, 
    Route, 
    useRouteMatch,
    useParams 
} from 'react-router-dom'

const Topic = () => {
    let { topic } = useParams();

    return(
        <div>
            <h4>{topic}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque dolorem nihil dolores eveniet dolor pariatur explicabo consequatur dolorum facilis?</p>
        </div>
    )
}

const ReactTopics = () => {
    //let match = useRouteMatch();
    //console.log(match);

    //'path' nos permite construir rutas relativas <Route>, mientras que 'url' nos permite construir enlaces relativos <Link> o <NavLink>

    let { path, url } = useRouteMatch();

  return (
    <div>
        <h2>Temas de React</h2>
        <ul>
            <li>
                <Link to={`${{url}/jsx}`}>JSX</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to={`${{url}/props}`}>Props</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to={`${{url}/estado}`}>Estado</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to={`${{url}/componentes}`}>Componente</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path={path}>
                <h4>Elige un tema de React</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque dolorem nihil dolores eveniet dolor pariatur explicabo consequatur dolorum facilis?</p>
            </Route>
            <Route path={`${path}/:topic`} component={Topic}></Route>
        </Switch>
    </div>
  )
}

export default ReactTopics