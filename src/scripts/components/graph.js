import React from 'react';
import Axis from './axis';
import GraphBody from './graph_body';
import LegendX from './graph_x_legend';
import LegendY from './graph_y_legend';
import findMax from '../findMax'


export default class Graph extends React.Component {
  static defaultProps = { width: 800, height: 600 };

  render() {
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
        />
        <LegendY
          x={0}
          y={0}
          length={this.props.height}
          max = {findMax(this.props.data)}
        />
        <GraphBody
          x={50}
          y={this.props.height - 100}
          data={this.props.data}
          length={this.props.width}
          height={this.props.height - 100}
          max = {findMax(this.props.data)}
        />
      </svg>
    )
  }
}
