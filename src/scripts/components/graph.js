import React from 'react';
import Axis from './axis';
import DisplayDay from './DisplayDay';
import DisplayDaySimple from './DisplayDaySimple';
import DisplayDayByUsers from './DisplayDayByUsers';
import LegendX from './graph_x_legend';
import LegendY from './graph_y_legend';
import findMax from '../functions/findMax'
import easyGroup from '../functions/easyGroup'
import findMaxNew from '../functions/findMaxNew'
import findMaxRssi from '../functions/findMaxRssi'
import timestampToTime from '../functions/timestampToTime'


export default class Graph extends React.Component {
  static defaultProps = { width: 800, height: 600 };
  getLastTime() {
    let timestamp = this.props.data[this.props.data.length-1].timestamp
    let hour = timestampToTime(timestamp)
    return hour
  }
  renderContent(lastTime) {
    if (this.props.viewSelection == 0) {
      return (
          <DisplayDay
            x={50}
            y={this.props.height - 100}
            data={this.props.data}
            length={this.props.width}
            height={this.props.height - 100}
            max = {findMax(this.props.data)}
            x_max = {lastTime}
          />
      )
    }
    if (this.props.viewSelection == 1) {
      return (
          <DisplayDaySimple
            x={50}
            y={this.props.height - 100}
            data={this.props.data}
            length={this.props.width}
            height={this.props.height - 100}
            max = {findMax(this.props.data)}
            x_max = {lastTime}
          />
      )
    }
    if (this.props.viewSelection == 2) {
      return (
          <DisplayDayByUsers
            x={50}
            y={this.props.height - 100}
            data={this.props.data}
            length={this.props.width}
            height={this.props.height - 100}
            max = {findMaxRssi(this.props.data)}
            x_max = {lastTime}
          />
      )
    }
  }
  renderLegend() {
    if (this.props.viewSelection == 0 ) {
      return (
        <LegendY
          x={0}
          y={0}
          length={this.props.height}
          max = {findMax(this.props.data)}
        />
      )
    }
    if (this.props.viewSelection == 1) {
      let data = easyGroup(this.props.data)
      let max = findMaxNew(data)
      return (
        <LegendY
          x={0}
          y={0}
          length={this.props.height}
          max = {max}
        />
      )
    }
    if (this.props.viewSelection == 2) {
      return (
        <LegendY
          x={0}
          y={0}
          length={this.props.height}
          max = {findMaxRssi(this.props.data)}
        />
      )
    }
  }
  render() {
    let lastTime = this.getLastTime()
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Axis
          x={50}
          y={this.props.height - 100}
          length={this.props.width}
          horizontal={true}
        />
        <Axis
          x={50}
          y={0}
          length={this.props.height - 100}
          horizontal={false}
        />
        <LegendX
          x={0}
          y={this.props.height - 50}
          length={this.props.width}
          x_max={lastTime}
          data={this.props.data}
        />
        {this.renderLegend(lastTime)}
        {this.renderContent(lastTime)}
      </svg>
    )
  }
}
