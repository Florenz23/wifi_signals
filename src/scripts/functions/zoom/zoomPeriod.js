export default function zoomPeriod(data,from,to) {
  let newArray = []
  if( from) {
    for (var i = from; i < to ; i++) {
      newArray.push(data[i])
    }
    return newArray
    console.log("zoom")
  } else {
    console.log("moin")
  }
    return data
}
