import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import dbService from '../../service/service';

import './signatureBar.css';

export default class SignatureBarChart extends Component {
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
        this.dbService.getSignatureBarChart().then(this.onChartLoaded).catch(this.onError);
    };

    render() {
        if (this.state.error) {
            return <span>Error...</span>;
        }

        const { chart } = this.state;

        const colors = {
            Невалидный: '#F96708',
            Валидный: '#0B98FA',
            'Собрано всего': '#F7D154',
            'Целевые показатели': '#65CD99',
        };
        const getColor = (bar) => colors[bar.id];

        const theme = {
            axis: {
                ticks: {
                    text: {
                        fill: '#43425D',
                        fontSize: 10,
                        opacity: 0.5,
                        fontFamily: 'Source Sans Pro',
                        lineHeight: 13,
                    },
                },
            },
        };

        return (
            <div className="signature_bar_chart_wrapper">
                <div className="signature_bar_chart_header">
                    <span className="signature_bar_chart_header_text">«Золотые» подписи</span>
                    <img
                        className="signature_bar_chart_header_icon"
                        src="./icons/badges/reboot.png"
                        alt="reboot"
                    />
                </div>
                <div className="chart_wrapper">
                    <div className="chart">
                        <ResponsiveBar
                            data={chart}
                            theme={theme}
                            margin={{ top: 10, right: 20, bottom: 50, left: 120 }}
                            keys={['Невалидный', 'Валидный', 'Собрано всего', 'Целевые показатели']}
                            indexBy="name"
                            layout="horizontal"
                            maxValue={200000}
                            padding={0.43}
                            colors={getColor}
                            valueScale={{ type: 'linear' }}
                            indexScale={{ type: 'band', round: true }}
                            borderWidth={5}
                            borderColor={{ from: 'color', modifiers: [['brighter', '0']] }}
                            borderRadius={2}
                            enableLabel={false}
                            enableGridX={true}
                            enableGridY={true}
                            gridXValues={[0, 50000, 100000, 150000, 200000]}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 0,
                                tickPadding: 10,
                                tickRotation: 0,
                            }}
                            axisLeft={{
                                tickSize: 0,
                                tickPadding: 10,
                                tickRotation: 0,
                            }}
                            isInteractive={false}
                        />
                        <div className="chart_label">
                            <span className="bar_label red_label">80 142</span>
                            <span className="bar_label blue_label">93 828</span>
                            <span className="bar_label yellow_label">173 970</span>
                            <span className="bar_label green_label">150 000</span>
                        </div>
                    </div>
                    <div className="legend">
                        <div className="signature_bar_legend_item">
                            <span className="signature_bar_chart_legend_value">450 000</span>
                            <span className="signature_bar_chart_legend_desc">
                                Целевой показатель
                            </span>
                        </div>
                        <div className="signature_bar_legend_item">
                            <span className="signature_bar_chart_legend_value">327 176</span>
                            <span className="signature_bar_chart_legend_desc">Собрано всего</span>
                        </div>
                        <div className="signature_bar_legend_item">
                            <span className="signature_bar_chart_legend_value">73%</span>
                            <span className="signature_bar_chart_legend_desc">
                                Выполнение целевого показателя
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
