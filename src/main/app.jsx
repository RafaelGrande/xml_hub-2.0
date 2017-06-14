import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'

import './app.css'

import React from 'react'

export default props => (
        <div className="mdl-layout">
            <header className="mdl-layout__header mdl-layout__header--scroll">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">XML Hub</span>
                    <div className="mdl-layout-spacer"></div>

                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href=""><i className="material-icons">email</i></a>
                        <a className="mdl-navigation__link mdl-navigation__link--icon person" href=""><i className="material-icons"><span>person</span></i>Carrefour</a>
                    </nav>
                </div>
            </header>
            <main className="mdl-layout__content">
                <div className="container">
                    <div className="page-metrics">
                        <div className="metrics-header">
                            <div className="metrics-header__title">
                                <span>Buscapé</span> 
                            </div>
                            <div className="metrics-header__icons float-right">
                                <button className="mdl-button mdl-js-button mdl-button--icon">
                                    <i className="material-icons">search</i>
                                </button>
                                <button className="mdl-button mdl-js-button mdl-button--icon">
                                    <i className="material-icons">file_download</i>
                                </button>
                            </div> 
                        </div>
                        <div className="metrics-header__perido">
                            <span className="metrics-header__data-inicial">01/06/2017</span> - 
                            <span className="metrics-header__data-final">10/06/2017</span>
                        </div>
                        <div className="metrics-header__opc-perido">
                            <button className="mdl-button mdl-js-button mdl-button--accent">
                                Personalizar
                            </button>
                            <button className="mdl-button mdl-js-button mdl-button--accent">
                                Últimos 6 meses
                            </button>
                            <button className="mdl-button mdl-js-button mdl-button--accent">
                                 Últimos 3 meses
                            </button>
                            <button className="mdl-button mdl-js-button mdl-button--accent">
                                Mês anterior
                            </button>
                            <button className="mdl-button mdl-js-button mdl-button--primary">
                                Mês atual
                            </button>
                        </div>
                    </div>
                    <div className="page-metrics">
                        <div className="info-metrics">
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--2-col">Cliques</div>
                                <div className="mdl-cell mdl-cell--2-col">Conversões</div>
                                <div className="mdl-cell mdl-cell--2-col">Investimento</div>
                                <div className="mdl-cell mdl-cell--2-col">Receita</div>
                                <div className="mdl-cell mdl-cell--2-col">ROI</div>
                                <div className="mdl-cell mdl-cell--2-col">Produtos</div>
                            </div>
                        </div>
                    </div>
                    <div className="page-metrics">
                        <div className="filter-metrics">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input" type="text" id="sample3"/>
                                <label className="mdl-textfield__label" for="sample3">Text...</label>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
)