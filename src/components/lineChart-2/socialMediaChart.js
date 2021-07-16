import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';
import dbService from '../../service/service';
import { linearGradientDef } from '@nivo/core';

import './socialMediaChart.css';

export default class SocialMediaChart extends Component {
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
        this.dbService.getSocialMediaChart().then(this.onChartLoaded).catch(this.onError);
    };

    render() {
        if (this.state.error) {
            return <span>Error...</span>;
        }

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

        const { chart } = this.state;
        return (
            <div className="social_media_wrapper">
                <div className="social_media_header">
                    <span className="social_media_header_text">Диаграмма 2</span>
                    <img
                        className="social_media_header_icon"
                        src="./icons/badges/reboot.png"
                        alt="reboot"
                    />
                </div>
                <ResponsiveLine
                    data={chart}
                    margin={{ top: 10, right: 50, bottom: 120, left: 50 }}
                    height={450}
                    theme={theme}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: '0',
                        max: '7000',
                        stacked: false,
                        reverse: false,
                    }}
                    colors={(c) => c.color}
                    defs={[
                        linearGradientDef('gradient', [
                            { offset: 0, color: 'inherit', opacity: 1 },
                            { offset: 70, color: 'inherit', opacity: 0 },
                        ]),
                    ]}
                    fill={[{ match: '*', id: 'gradient' }]}
                    curve="natural"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 0,
                        tickPadding: 17,
                        tickRotation: 0,
                        legendPosition: 'middle',
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickValues: [0, 1750, 3500, 5250, 7000],
                        tickSize: 0,
                        tickPadding: 12,
                        tickRotation: 0,
                        legendPosition: 'middle',
                    }}
                    pointSize={8}
                    pointColor="#FFFFFF"
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor', modifiers: [] }}
                    pointLabelYOffset={0}
                    enableArea={true}
                    areaOpacity={0.25}
                    enableCrosshair={false}
                    gridYValues={[1750, 3500, 5250, 7000]}
                    gridXValues={[
                        '22.08.19',
                        '23.08.19',
                        '24.08.19',
                        '25.08.19',
                        '26.08.19',
                        '27.08.19',
                        '28.08.19',
                    ]}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: -315,
                            translateY: 100,
                            itemWidth: 200,
                            itemHeight: 30,
                            itemsSpacing: 1,
                            symbolSize: 8,
                            symbolShape: 'circle',
                            itemDirection: 'left-to-right',
                            itemTextColor: '#333333',
                        },
                    ]}
                    tooltip={(input) => {
                        if (input.point.serieId === 'Показатель 1') {
                            return (
                                <div className="tooltip">
                                    <span className="tooltip_date">{input.point.data.x}</span>
                                    <div className="tooltip_value">
                                        <div className="tooltip_dot tooltip_red_dot"></div>
                                        <span className="tooltip_text">{input.point.serieId}</span>
                                    </div>
                                </div>
                            );
                        }
                        if (input.point.serieId === 'Показатель 2') {
                            return (
                                <div className="tooltip">
                                    <span className="tooltip_date">{input.point.data.x}</span>
                                    <div className="tooltip_value">
                                        <div className="tooltip_dot tooltip_yellow_dot"></div>
                                        <span className="tooltip_text">{input.point.serieId}</span>
                                    </div>
                                </div>
                            );
                        }
                        if (input.point.serieId === 'Показатель 3') {
                            return (
                                <div className="tooltip">
                                    <span className="tooltip_date">{input.point.data.x}</span>
                                    <div className="tooltip_value small_value">
                                        <div className="tooltip_dot tooltip_blue_dot "></div>
                                        <span className="tooltip_text small">
                                            {input.point.serieId}
                                        </span>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    }}
                />
            </div>
        );
    }
}
