import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Erro from './pages/Erro/index'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route patch='#' component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes