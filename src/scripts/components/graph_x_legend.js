import React from 'react';

export default class LegendY extends React.Component {
  prepareCords() {
    let coords = {
      x1: this.props.x,
      y1: this.props.y
    }

    coords.x2 = coords.x1 + this.props.length;
    coords.y2 = coords.y1;
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
    let multiplicator = this.props.length/9
    console.log(multiplicator)
    let times = [0,3,6,9,12,15,18,21,24]
    console.log(time_max)



    const color = "black"
    const corrector = 0
    return (
      <g>
        <text x={coords.x1+1*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,9)}</text>
        <text x={coords.x1+2*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,8)}</text>
        <text x={coords.x1+3*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,7)}</text>
        <text x={coords.x1+4*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,6)}</text>
        <text x={coords.x1+5*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,5)}</text>
        <text x={coords.x1+6*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,4)}</text>
        <text x={coords.x1+7*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,3)}</text>
        <text x={coords.x1+8*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,2)}</text>
        <text x={coords.x1+9*multiplicator-corrector} y={coords.y1} fill={color}>{this.makeTime(time_max,1)}</text>
      </g>
    )
  }
}
