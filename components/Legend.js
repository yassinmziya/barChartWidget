import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

export default class Legend extends React.Component {
    render() {
        return (
            <table id="legend">
                {
                    this.props.data.map(datum => <tr>
                        <td
                            style={{
                                width:"11px",
                                height:"10px",
                                backgroundColor:datum.color
                            }}
                        />
                        <td>{datum.label}</td>
                    </tr>)
                }
            </table>
        )
    }
}