import React, { Component } from 'react';
import Graph from './scripts/components/graph'
import zoomPeriod from './scripts/functions/zoom/zoomPeriod'

export default class App extends React.Component {
  state = { dataSetIndex: 2 , timeSetIndex:0}
  static defaultProps = {
      views: [["day"],["simpleDay"],["Macs"]],
      times: [[10],[12],[14]]
    }

  selectDataset(event) {
    this.setState({dataSetIndex: event.target.value});
  }
  selectTime(event) {
    this.setState({timeSetIndex: event.target.value});
  }
  getData(allData,hour) {
    console.log(hour)
    let zoomData = zoomPeriod(allData,hour,4)
    console.log(zoomData)
    return zoomData
  }

  render() {
    let options_view = this.props.views.map((value, index) => {
      return <option key={index} value={index}>View {value}</option>
    });
    let options_time = this.props.times.map((value, index) => {
      return <option key={index} value={index}>Time {value}</option>
    });
    let selectedHour = this.props.times[this.state.timeSetIndex][0]
    let data = this.getData(this.props.datasets,selectedHour)

    return (
      <div>
        <select
          value={this.state.timeSetIndex}
          onChange={this.selectDataset.bind(this)} >
          {options_view}
        </select>
        <select
          value={this.state.dataSetIndex}
          onChange={this.selectTime.bind(this)} >
          {options_time}
        </select>
        <Graph data={data} viewSelection={this.state.dataSetIndex} timeSelection={this.state.timeSetIndex} />
      </div>
    )
  }
}
