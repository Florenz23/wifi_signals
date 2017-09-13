import React from 'react';

export default class GraphBody extends React.Component {
  static defaultProps = { multiplier_x: (33+1/3), multiplier_y:-1 };

  prepareData() {
    let d = [`M ${this.props.x} ${this.props.y}`];
console.log(this.props.data)
    let collector = this.props.data.map(chunk => {
      let xNext = this.props.x + chunk[0] * this.props.multiplier_x;
      let yNext = this.props.y - chunk[1] * this.props.multiplier_y;
      return `L ${xNext} ${yNext}`;
    });

    return d.concat(collector).join(' ');
  }

  render() {
    let d = this.prepareData();
    console.log(d)
    return(
      <path d={d}
        stroke="orange"
        strokeWidth={1}
        fill="none"
      />
    )
  }
}






// [
//   [1, 3],
//   [2, 5],
//   [3, 2],
//   [4, 16],
//   [18, 5]
// ],


// {
//   "node": "wifi4garden1",
//   "cellphones": [
//     {
//       "rssi": -88.88888888888889,
//       "company": "Apple, Inc.",
//       "mac": "f0:d1:a9:18:2e:5d"
//     },
//     {
//       "rssi": -92.18181818181819,
//       "company": "Apple, Inc.",
//       "mac": "80:e6:50:e1:80:c0"
//     },
//     {
//       "rssi": -85.5,
//       "company": "Cambridge Industries(Group) Co.,Ltd.",
//       "mac": "4c:fa:ca:f7:70:c0"
//     },
//     {
//       "rssi": -90,
//       "company": "SAMSUNG ELECTRO-MECHANICS(THAILAND)",
//       "mac": "ac:5f:3e:ca:9b:41"
//     },
//     {
//       "rssi": -75,
//       "company": "Apple, Inc.",
//       "mac": "40:30:04:93:97:72"
//     },
//     {
//       "rssi": -85,
//       "company": "Apple, Inc.",
//       "mac": "8c:2d:aa:44:3d:df"
//     }
//   ],
//   "timestamp": 1504735342
// }
//
// ]
