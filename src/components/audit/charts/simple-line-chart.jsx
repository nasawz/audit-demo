import React from 'react'
import ReactDOM from 'react-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data_one = [
    { name: '15.10', value: 5800 },
    { name: '15.11', value: 2650 },
    { name: '15.12', value: 3950 },
    { name: '16.01', value: 3100 },
    { name: '16.02', value: 3300 },
    { name: '16.03', value: 878 },
    { name: '16.04', value: 4467 },
    { name: '16.05', value: 5978 },
    { name: '16.06', value: 5123 },
    { name: '16.07', value: 4867 },
    { name: '16.08', value: 5990 },
]
const data_two = [
    { name: '15.10', value: 1800 },
    { name: '15.11', value: 4675 },
    { name: '15.12', value: 2000 },
    { name: '16.01', value: 1766 },
    { name: '16.02', value: 5675 },
    { name: '16.03', value: 2500 },
    { name: '16.04', value: 3900 },
    { name: '16.05', value: 4544 },
    { name: '16.06', value: 2900 },
    { name: '16.07', value: 3000 },
    { name: '16.08', value: 4000 },
]
const SimpleLineChart = React.createClass({
    getDefaultProps() {
        return {
            height: 300,
            state: 's1'
        }
    },
    componentDidMount() {

        let el = ReactDOM.findDOMNode(this)
        let width = el.getBoundingClientRect().width
        this.setState({ width: width })

    },
    renderContent() {
        if (this.state && this.state.width) {
            let state = this.props.state
            let data
            if (state == 's1') {
                data = data_one
            } else if (state == 's2') {
                data = data_two
            }
            return (
                <div>
                    <LineChart width={parseInt(this.state.width) } height={parseInt(this.props.height) } data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Line type="monotone" dataKey="value" stroke="#9857b3" activeDot={{ r: 8 }}/>
                    </LineChart>
                </div>
            )
        } else {
            return <div />
        }

    },
    render() {
        return (
            <div>
                {this.renderContent() }
            </div>
        )
    }
})


export default SimpleLineChart
