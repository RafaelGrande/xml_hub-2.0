import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'

import React from 'react'

export default props => (
        <div className="mdl-layout">
            <header className="mdl-layout__header mdl-layout__header--scroll">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">XMLHub 2.0 - Beta</span>
                    <div className="mdl-layout-spacer"></div>

                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href=""><i className="material-icons">search</i></a>
                        <a className="mdl-navigation__link" href=""><i className="material-icons">email</i></a>
                        <a className="mdl-navigation__link mdl-navigation__link--icon person" href=""><i className="material-icons"><span>person</span></i>Carrefour</a>
                    </nav>
                </div>
            </header>
            <main className="mdl-layout__content">
                <div className="content mdl-grid mdl-grid--no-spacing">
                    <span>teste</span>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                        <i className="material-icons">file_download</i>
                    </button>
                </div>
            </main>
        </div>
)
