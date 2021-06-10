import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie';
import dbService from '../../service/service';

import './signaturePieChart.css';

export default class SignaturePieChart extends Component {
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
        this.dbService.getSignaturePieChart().then(this.onChartLoaded).catch(this.onError);
    };

    render() {
        if (this.state.error) {
            return <span>Error...</span>;
        }

        const { chart } = this.state;

        return (
            <div className="signature_pie_chart_wrapper">
                <div className="siganture_pie_chart_header">
                    <span className="siganture_pie_chart_header_text">
                        Подписи от двери до двери
                    </span>
                    <img
                        className="siganture_pie_chart_header_icon"
                        src="./icons/badges/reboot.png"
                        alt="reboot"
                    />
                </div>
                <div className="signature_pie_chart">
                    <div className="pie_chart">
                        <ResponsivePie
                            data={chart}
                            margin={{ top: 50, right: 20, bottom: 110, left: 0 }}
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
                                    translateX: 0,
                                    translateY: 300,
                                    itemWidth: 120,
                                    itemHeight: 400,
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
                        <div className="pie_chart_legend_value">
                            <span className="legend_item_value pie_chart_legend_red_value">0%</span>
                            <span className="legend_item_value pie_chart_legend_yellow_value">
                                72%
                            </span>
                            <span className="legend_item_value pie_chart_legend_blue_value">
                                23%
                            </span>
                        </div>
                    </div>
                    <div className="pie_legend">
                        <div className="signature_pie_legend_item">
                            <span className="signature_pie_chart_legend_value">450 000</span>
                            <span className="signature_pie_chart_legend_desc">
                                Целевой показатель
                            </span>
                        </div>
                        <div className="signature_pie_legend_item">
                            <span className="signature_pie_chart_legend_value">327 176</span>
                            <span className="signature_pie_chart_legend_desc">Собрано всего</span>
                        </div>
                        <div className="signature_pie_legend_item">
                            <span className="signature_pie_chart_legend_value">73%</span>
                            <span className="signature_pie_chart_legend_desc">
                                Выполнение целевого показателя
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
