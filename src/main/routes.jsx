import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Veiculos from '../veiculos/veiculos'
import Categorias from '../categorias/categorias'
import Subcategorias from '../subcategorias/subcategorias'
import Produtos from '../produtos/produtos'

export default props => (
    <Router history={hashHistory}>
        <Route path='/veiculos' component={Veiculos} />
        <Route path='/categorias' component={Categorias} />
        <Route path='/subcategorias' component={Subcategorias} />
        <Route path='/produtos' component={Produtos} />
        <Redirect from='*' to='/veiculos' />
    </Router>
)


