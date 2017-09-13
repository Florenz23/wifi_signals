import React from 'react';

export default class Legend extends React.Component {
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

  render() {
    let coords = this.prepareCords();
    let multiplicator = this.props.length/25
    let times = [0,3,6,9,12,15,18,21,24]
    const color = "black"
    const corrector = 22
    console.log(multiplicator)
    return (
      <g>
        <text x={coords.x1+times[0]*multiplicator-corrector} y={coords.y1} fill={color}>00:00</text>
        <text x={coords.x1+times[1]*multiplicator-corrector} y={coords.y1} fill={color}>03:00</text>
        <text x={coords.x1+times[2]*multiplicator-corrector} y={coords.y1} fill={color}>06:00</text>
        <text x={coords.x1+times[3]*multiplicator-corrector} y={coords.y1} fill={color}>09:00</text>
        <text x={coords.x1+times[4]*multiplicator-corrector} y={coords.y1} fill={color}>12:00</text>
        <text x={coords.x1+times[5]*multiplicator-corrector} y={coords.y1} fill={color}>15:00</text>
        <text x={coords.x1+times[6]*multiplicator-corrector} y={coords.y1} fill={color}>18:00</text>
        <text x={coords.x1+times[7]*multiplicator-corrector} y={coords.y1} fill={color}>21:00</text>
        <text x={coords.x1+times[8]*multiplicator-corrector} y={coords.y1} fill={color}>24:00</text>
      </g>
    )
  }
}
