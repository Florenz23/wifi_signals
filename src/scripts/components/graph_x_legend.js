import React from 'react';

export default class Legend extends React.Component {
  prepareCords() {
    let coords = {
      x1: this.props.x,
      y1: this.props.y
    }

    coords.x2 = coords.x1 + this.props.length;
    coords.y2 = coords.y1;

    return coords;
  }

  render() {
    let coords = this.prepareCords();
    console.log(coords.x2)
    return (
      <text x={coords.x1} y={coords.y1} fill="red">I love SVG!</text>
    )
  }
}
