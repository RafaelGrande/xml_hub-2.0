import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'

import React from 'react'

export default props => (
    <div className='header'>
        <h1>XMLHub</h1>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Button
        </button>
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
            <i className="material-icons">add</i>
        </button>

        <div className="mdl-layout">
            <header className="mdl-layout__header mdl-layout__header--scroll">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">XMLHub 2.0 - Beta</span>
                    <div className="mdl-layout-spacer"></div>

                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
            </header>

        </div>
    </div>
)
