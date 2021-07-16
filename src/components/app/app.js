import React, { Component } from 'react';
import AppHeader from '../app-header';
import CardList from '../card-list';
import SocialMediaChart from '../lineChart-2';
import MonitoringChart from '../pieChart-1';
import SignatureBarChart from '../barChart-4';
import SignaturePieChart from '../pieChart-3';

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
