import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import BarChart from './components/BarChart';

class App extends React.Component {
    render() {
        return (
            <BarChart 
                h={500}
                w={500}
                data={null}
                xLabel="x-label"
                yLabel="y-label"
                legend={[
                    {color: "green", label:"metricA"},
                    {color: "blue", label:"metricB"},
                    {color: "red", label: "metricC"}
                ]}
            />
        )
    }
}
  


ReactDOM.render(<App />, document.getElementById('chart'));