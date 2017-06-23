import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'

import React from 'react'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(metric => (
            <tr key={metric.clicks}>
                <td className="mdl-data-table__cell--non-numeric">{metric.veiculo}</td>
                <td>{metric.clicks}</td>
                <td>{metric.conversao}</td>
                <td>{metric.tx_conv}</td>
                <td>{metric.ROI}</td>
                <td>{metric.receita}</td>
                <td>{metric.investimento}</td>
            </tr>
        ))
        
    }

    return (
        <div>
            <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>
                    <tr>
                        <th className="mdl-data-table__cell--non-numeric mdl-data-table__header--sorted-ascending">Nome</th>
                        <th>Cliques</th>
                        <th>Converões</th>
                        <th>Taxa de conversão</th>
                        <th>ROI</th>
                        <th>Receita</th>
                        <th>investimento</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows() }
                </tbody>
            </table>
            <button type="button" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" onClick={() => props.handleNext(-10)}>
                <i className="material-icons">keyboard_arrow_left</i>
            </button>
            <button type="button" className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" onClick={() => props.handleNext(10)}>
                <i className="material-icons">keyboard_arrow_right</i>
            </button>
        </div>
    )
}