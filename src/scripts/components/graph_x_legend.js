import React from 'react';

export default class LegendY extends React.Component {
  prepareCords() {
    let coords = {
      x1: this.props.x,
      y1: this.props.y
    }

    coords.x2 = coords.x1 + this.props.length;
    coords.y2 = coords.y1;
      for (var i = 0; i<10; i=i+30){
      }

    return coords;
  }

  prepareLegend() {
      for (var i = 0; i<10; i=i+30){
      }
  }
  makeTime(time_max,dividador) {
    let time = time_max/dividador
    time = Math.round(time*100) / 100
    return time
  }

  render() {
    let coords = this.prepareCords();
    let time_max = this.props.x_max
    let multiplicator = this.props.length/time_max
    let times = [0,3,6,9,12,15,18,21,24]
    console.log(time_max)



    const color = "black"
    const corrector = -30
    return (
      <g>
        <text x={coords.x1+time_max/9*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,9)}</text>
        <text x={coords.x1+time_max/8*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,8)}</text>
        <text x={coords.x1+time_max/7*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,8)}</text>
        <text x={coords.x1+time_max/5*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,8)}</text>
        <text x={coords.x1+time_max/4*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,8)}</text>
        <text x={coords.x1+time_max/3*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,8)}</text>
        <text x={coords.x1+time_max/2*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,8)}</text>
        <text x={coords.x1+time_max/24*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,8)}</text>
        <text x={coords.x1+time_max/12*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,8)}</text>
      </g>
    )
  }
}
