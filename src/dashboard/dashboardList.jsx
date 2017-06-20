import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'

import React from 'react'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(metric => (
            <tr key={metric.clicks}>
                <td>{metric.veiculo}</td>
                <td>{metric.clicks}</td>
            </tr>
        ))
        
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Cliques</th>
                </tr>
            </thead>
            <tbody>
                {renderRows() }
            </tbody>
        </table>
    )
}