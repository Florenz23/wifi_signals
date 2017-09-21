import React from 'react';
import easyGroup from '../easyGroup'
import randomColor from 'randomcolor'

export default class IndividualMacs extends React.Component {
  static defaultProps = { multiplier_x: (33+1/3), multiplier_y:10 };

  timestampToTime(timestamp) {
      let date = new Date(timestamp *1000)
      const hour = date.getHours()
      const minutes = date.getMinutes()
      const new_time = hour + minutes * 0.01
      return new_time
  }

  prepareData(index) {
    // let data = createSimpleArray(this.props.data)
    // let data = easyGroup(this.props.data)
    // let max = findMaxNew(data)
    // let dataCut = groupByPassedTime()
    let d = [`M ${this.props.x} ${this.props.y}`];
    let multiplier = this.props.height/(50)
    let collector = this.props.data[index].map(chunk => {
      let hour = this.timestampToTime(chunk.timestamp)
      console.log(hour)
      let xNext = this.props.x + hour * this.props.length/25;
      let yNext = this.props.y - (chunk.cellphone[0].rssi+100) * multiplier;
      if (chunk.cellphone[0].rssi != -100) {
        // console.log(chunk.cellphone[0].mac)
        // console.log(hour)
      }
      return `L ${xNext} ${yNext}`;
    });

    return d.concat(collector).join(' ');
  }

  render() {
    let users = []
    for (let i=0; i < this.props.data.length; i++){
    // for (let i=1; i < 2; i++){
      let mac = this.props.data[i][0].cellphone[0].mac
      mac = mac.split(':').join("");
      mac = mac.substr(mac.length - 6);
      users.push(
        <path d={this.prepareData(i)}
          key={`${i}key`}
          stroke={`#${mac}`}
          strokeWidth={1}
          fill="none"
        />
      )
    }
    return(
      <g>
      {users}
      </g>
    )
  }
}

// https://stackoverflow.com/questions/22876978/loop-inside-react-jsx




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
