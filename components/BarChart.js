import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import Axes from './Axes';
import Bars from './Bars';
import Legend from './Legend';


export default class BarChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const svgDimensions = { h: this.props.h || 500, w: this.props.w || 800 }
        const margins = { top: 50, right: 20, bottom: 100, left: 60 }
        const data = this.props.data || 
        [
            {
                label: 'somethingA',
                values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
            },
            {
                label: 'somethingB',
                values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 45}]
            },
            {
                label: 'somethingC',
                values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 45}]
            },
            {
                label: 'somethingD',
                values: [{x: 'SomethingA', y: 31}, {x: 'SomethingB', y: 24}, {x: 'SomethingC', y: 43}]
            },
            {
                label: 'somethingE',
                values: [{x: 'SomethingA', y: 26}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
            },
            {
                label: 'somethingF',
                values: [{x: 'SomethingA', y: 18}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
            }
        ];

        var temp = data.map(datum => {
            var total = 0;
            datum.values.forEach(value => {
                total = total + value.y
            });
            return total;
        })

        var maxValue = Math.max.apply(Math, temp);

        const xScale = d3.scaleBand().domain(data.map((d) => d.label))
        .range([margins.left, svgDimensions.w - margins.right]).padding(0.5);

        const yScale = d3.scaleLinear().domain([0, maxValue])
        .range([svgDimensions.h - margins.bottom, margins.top])


        return (
            <div>
            <svg width={svgDimensions.w} height={svgDimensions.h}>
                <Axes
                    scales={{ xScale, yScale }}
                    margins={margins}
                    svgDimensions={svgDimensions}
                />
                <Bars
                    scales={{ xScale, yScale }}
                    margins={margins}
                    data={data}
                    maxValue={maxValue}
                    svgDimensions={svgDimensions}
                    colors={this.props.legend && this.props.legend.map(x => x.color)}
                />
                <text x={svgDimensions.w/2} y={svgDimensions.h - margins.bottom/8}>{this.props.xLabel}</text>
                <text transform={`translate(${margins.left/3}, ${svgDimensions.h/2})rotate(-90)`}>{this.props.yLabel}</text>
            </svg>
            
            {this.props.legend && <Legend data={this.props.legend}/>}

            </div>
        );
    }
}