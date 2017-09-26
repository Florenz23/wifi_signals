import React from 'react';
import IndividualMacs from './individual_macs';
import createUsersArray from '../functions/createUsersArray'



export default class AllMacs extends React.Component {
  render() {
    let data = createUsersArray(this.props.data)
      return (
        <IndividualMacs
          x={this.props.x}
          y={this.props.y}
          data={data}
          length={this.props.length}
          height={this.props.height}
          max = {this.props.max}
        />
      )
  }
}

// export default class AllMacs extends React.Component {
//   render() {
//     let data = createUsersArray(this.props.data)
//     return data.map((user) => {
//       console.log(user)
//       return (
//         <IndividualMacs
//           x={this.props.x}
//           y={this.props.y}
//           data={user}
//           length={this.props.length}
//           height={this.props.height}
//         />
//       )
//     })
//   }
// }


// return commentList.map ((comment) => {
//      return (<Comment
//                key = {comment.id}
//                author = {comment.author}
//                body = {comment.body}
//                avatarUrl = {comment.avatarUrl}
//                />);
//    })
