import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'

import './app.css'

import Header from '../header/header'
import Routes from './routes'
import React from 'react'

export default props => (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                        <div aria-expanded="false" role="button" className="mdl-layout__drawer-button">
                                <i className="material-icons">account_circle</i>
                        </div>
                        <div className="mdl-layout__header-row">
                                <span className="mdl-layout-title">Title</span>
                                <div className="mdl-layout-spacer"></div>
                                <nav className="mdl-navigation mdl-layout--large-screen-only">
                                        <a className="mdl-navigation__link" href="#/veiculos">Veiculo</a>
                                        <a className="mdl-navigation__link" href="#/categorias">Categoria</a>
                                        <a className="mdl-navigation__link" href="#/subcategorias">Subcategoria</a>
                                        <a className="mdl-navigation__link" href="#/produtos">Produto</a>
                                </nav>
                        </div>
                </header>
                <div className="mdl-layout__drawer">
                        <span className="mdl-layout-title">Title</span>
                        <nav className="mdl-navigation">
                                <a className="mdl-navigation__link" href="">
                                        <i className="material-icons">exit_to_app</i>
                                        Sair
                                </a>
                                <a className="mdl-navigation__link" href="">Link</a>
                                <a className="mdl-navigation__link" href="">Link</a>
                                <a className="mdl-navigation__link" href="">Link</a>
                        </nav>
                </div>
                <main className="mdl-layout__content container">
                        <div className="page-content">
                                < Routes />
                        </div>
                </main>
        </div>
  
                                

)