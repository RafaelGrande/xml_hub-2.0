import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'

import React from 'react'

export default props => {
    return (
        <div>
            <h2>{props.user} {props.partner}</h2>
            <span>Período: {props.dateInitial}
                <button className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">event</i>
                </button> 
                - 
                {props.dateEnd}
                <button className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">event</i>
                </button>
            </span>
        </div>   
    )
}

