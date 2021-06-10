import React, { Component } from 'react';
import AppHeader from '../app-header';
import CardList from '../card-list';
import SocialMediaChart from '../social-media-chart';
import MonitoringChart from '../monitoring-pie-chart';
import SignatureBarChart from '../signature-bar-chart';
import SignaturePieChart from '../signature-pie-chart';

import './app.css';

export default class App extends Component {
    render() {
        return (
            <>
                <AppHeader />
                <CardList />
                <div className="chart_wrapper">
                    <MonitoringChart />
                    <SocialMediaChart />
                </div>
                <div className="chart_wrapper">
                    <SignaturePieChart />
                    <SignatureBarChart />
                </div>
            </>
        );
    }
}
