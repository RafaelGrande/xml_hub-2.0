import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'

import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Title</span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                    </div>
                </header>  
        )
    }
}