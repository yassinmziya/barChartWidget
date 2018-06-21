import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

export default class Bars extends React.Component {
    constructor(props) {
        super(props);
    
        this.colorScale = d3.scaleLinear()
            .domain([0, this.props.maxValue])
            .range(['#F3E5F5', '#7B1FA2'])
            .interpolate(d3.interpolateLab);
    }

    render() {
        const { scales, margins, data, svgDimensions } = this.props;
        const { xScale, yScale } = scales;
        const { h } = svgDimensions;
        const colors = this.props.colors || ["green", "blue", "red"]
        const bars = (
            data.map(datum => {
                var offSet = 0
                return datum.values.map((value, index) => {            
                        var barSegment = <rect
                            key={datum.label}
                            x={xScale(datum.label)}
                            y={yScale(value.y + offSet)}
                            height={h - margins.bottom - scales.yScale(value.y)}
                            width={xScale.bandwidth()}
                            fill={colors[index]}
                        />

                        offSet += value.y;
                        return barSegment;
                    })
                }
            )
        );

        return <g>{bars}</g>;
    }
}