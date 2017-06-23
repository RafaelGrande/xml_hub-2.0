import 'modules/material-design-lite/material.min.css'
import 'modules/material-design-lite/material.min.js'

import axios from 'axios'

import React, { Component } from 'react'

import DashbordHeader from './dashboardHeader'
import DashboardList from './dashboardList'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
                        list: [], 
                        skip: 0, 
                        user: 'carrefour',
                        partner: 'buscape',
                        category: '',
                        subcategory:'',
                        dateInitial: '2017-05-01', 
                        dateEnd: '2017-05-10'
                    }

        this.handleNext = this.handleNext.bind(this)

        this.refresh()
    }

    handleNext(soma) {
        this.setState((prevState) => {
            return {skip: prevState.skip + soma};
        });
        console.log(this.state.skip)
        
    }

    refresh(){
        console.log('refresh()')
        console.log(this.state.skip)
        axios.get('http://db.jussilabs.com/carrefour/system.js/_eval?criteria={%22fn%22:%22getMetricsVeiculos(%272017-05-01%27,%272017-05-10%27,'+this.state.skip+')%22}')
            .then(result => this.setState({...this.state, list: result.data.result._batch}))
    }
    render() {
        return (
            <div>
                <DashbordHeader 
                    user = {this.state.user}
                    partner = {this.state.partner}
                    dateInitial={this.state.dateInitial}
                    dateEnd={this.state.dateEnd} 
                />
                <DashboardList 
                    list={this.state.list}
                    handleNext={this.handleNext}
                />
            </div>
        )  
    }
}