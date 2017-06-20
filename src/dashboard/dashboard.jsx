import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'

import axios from 'axios'

import React, { Component } from 'react'

import DashboardList from './dashboardList'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {list: []}

        this.refresh()
    }

    refresh(){
        axios.get('http://db.jussilabs.com/carrefour/system.js/_eval?criteria={%22fn%22:%22getMetricsVeiculos(%272017-06-01%27,%272017-06-02%27,1)%22}')
            .then(result => this.setState({...this.state, list: result.data.result._batch}))
    }
    render() {
        return (
            <div>
                <h1>teste</h1>
                <DashboardList list={this.state.list}/>
            </div>
        )  
    }
}