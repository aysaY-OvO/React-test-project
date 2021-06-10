import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie';
import dbService from '../../service/service';

import './monitoringChart.css';

export default class MonitoringChart extends Component {
    dbService = new dbService();

    state = {
        chart: [],
        error: false,
    };

    componentDidMount() {
        this.getChart();
    }

    onChartLoaded = (chart) => {
        this.setState({
            chart,
        });
    };

    onError = () => {
        this.setState({
            error: true,
        });
    };

    getChart = () => {
        this.dbService.getMonitoringChart().then(this.onChartLoaded).catch(this.onError);
    };

    render() {
        if (this.state.error) {
            return <span>Error...</span>;
        }

        const { chart } = this.state;
        return (
            <div className="monitoring_chart_wrapper">
                <div className="monitoring_chart_header">
                    <span className="monitoring_chart_header_text">Мониторинг</span>
                    <img
                        className="monitoring_chart_header_icon"
                        src="./icons/badges/reboot.png"
                        alt="reboot"
                    />
                </div>
                <ResponsivePie
                    data={chart}
                    margin={{ top: -200, right: 80, bottom: 10, left: 80 }}
                    innerRadius={0.8}
                    startAngle={200}
                    endAngle={-200}
                    padAngle={0}
                    cornerRadius={0}
                    colors={{ datum: 'data.color' }}
                    borderWidth={0}
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                    activeInnerRadiusOffset={3}
                    activeOuterRadiusOffset={3}
                    legends={[
                        {
                            symbolShape: 'circle',
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 35,
                            translateY: -98,
                            itemWidth: 150,
                            itemHeight: 50,
                            itemSpacing: 1,
                            symbolSize: 8,
                            itemTextColor: '#333333',
                            itemDirection: 'left-to-right',
                        },
                    ]}
                    tooltip={({ datum: { value, color } }) => (
                        <div
                            style={{
                                width: '63px',
                                padding: '8px 4px',
                                backgroundColor: '#192A3E',
                                opacity: 0.6,
                                borderRadius: '3px',
                            }}>
                            <li
                                style={{
                                    color,
                                    margin: 0,
                                }}>
                                <span
                                    style={{
                                        fontFamily: 'Source Sans Pro',
                                        fontSize: '12px',
                                        lineHeight: '10px',
                                        letterSpacing: '0.15px',
                                        color: '#FFFFFF',
                                    }}>
                                    <strong>{value}%</strong>
                                </span>
                            </li>
                        </div>
                    )}
                />
                <div className="legend_value">
                    <span className="legend_item_value legend_red_value">55%</span>
                    <span className="legend_item_value legend_yellow_value">11%</span>
                    <span className="legend_item_value legend_blue_value">33%</span>
                </div>
            </div>
        );
    }
}
