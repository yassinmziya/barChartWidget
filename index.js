import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './components/BarChart';
import './styles.css';

class App extends React.Component {
    render() {
        const data = [
            {
                label: 'somethingA',
                values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 40}, {x: 'SomethingC', y: 23}],
            }, 
            {
                label: 'somethingB',
                values: [{x: 'SomethingA', y: 20}, {x: 'SomethingB', y: 24}, {x: 'SomethingC', y: 51}]
            }, 
            {
                label: 'somethingC',
                values: [{x: 'SomethingA', y: 46}, {x: 'SomethingB', y: 64}, {x: 'SomethingC', y: 10}]
            }, 
        ];

        return (
            <BarChart 
                h={500}
                w={500}
                data={data}
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
  
// [
//     {
//         label: 'somethingA',
//         values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
//     }, 
// ]

ReactDOM.render(<App />, document.getElementById('renderBarChart'));
