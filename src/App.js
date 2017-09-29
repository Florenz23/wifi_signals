import React, { Component } from 'react';
import Graph from './scripts/components/graph'
import zoomPeriod from './scripts/functions/zoom/zoomPeriod'


export default class App extends React.Component {
  state = { dataSetIndex: 0 , timeSetIndex:0}
  static defaultProps = {
    views: [["day"],["simpleDay"],["Macs"]],
    times: [["day"],[0],[2],[4],[6],[8],[10],[12],[14],[16],[18],[20],[22]]

  }

  selectDataset(event) {
    this.setState({dataSetIndex: event.target.value});
  }
  selectTime(event) {
    this.setState({timeSetIndex: event.target.value});
  }
  getData(allData,time) {
    let display_hours = 2
    let start_time = time
    if (time == "day") {
      display_hours = 2
      start_time = 0
    }
    let zoomData = zoomPeriod(allData,start_time,display_hours)
    return zoomData
  }

  render() {
    let options = this.props.views.map((value, index) => {
      return <option key={index} value={index}>Ansicht {value}</option>
    });
    let options_time = this.props.times.map((value, index) => {
      return <option key={index} value={index}>Time {value}</option>
    });
    let selectedHour = this.props.times[this.state.timeSetIndex][0]
    let data = this.getData(this.props.datasets,selectedHour)

    return (
      <div>
        <select
          value={this.state.dataSetIndex}
          onChange={this.selectDataset.bind(this)} >
          {options}
        </select>
        <select
          value={this.state.timeSetIndex}
          onChange={this.selectTime.bind(this)} >
          {options_time}
        </select>
        <Graph data={data} viewSelection={this.state.dataSetIndex} timeSelection={this.state.timeSetIndex} />
      </div>
    )
  }
}
