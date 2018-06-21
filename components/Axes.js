import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

export default class Axes extends React.Component {
    // props: { scales, margins, svgDimensions  }

    render() {
        const scales = this.props.scales;
        const margins = this.props.margins;
        const svgDimensions = this.props.svgDimensions;
        const { h, w } = svgDimensions;

        const xProps = {
            orient: 'Bottom',
            scale: scales.xScale,
            translate: `translate(0, ${h - margins.bottom})`,
            tickSize: h - margins.top - margins.bottom,
        }
        
        const yProps = {
            orient: 'Left',
            scale: scales.yScale,
            translate: `translate(${margins.left}, 0)`,
            tickSize: w - margins.left - margins.right,
        }
        return (
            <g>
                <Axis {...xProps}/>
                <Axis {...yProps}/>
            </g>
        )
    }
}

class Axis extends React.Component {
    componentDidMount() {
        this.renderAxis();
    }
    
    componentDidUpdate() {
        this.renderAxis();
    }

    renderAxis() {
        const axis = this.props.orient === 'Bottom' ? d3.axisBottom(this.props.scale) : d3.axisLeft(this.props.scale);

        axis.tickSize(-this.props.tickSize)
          .tickPadding([12])
          .ticks([4]);

        d3.select(this.axisElement).call(axis);
    }

    render() {
        return (
            <g
                className={`Axis Axis-${this.props.orient}`}
                ref={(el) => { this.axisElement = el; }}
                transform={this.props.translate}
            />
        );
    }
}