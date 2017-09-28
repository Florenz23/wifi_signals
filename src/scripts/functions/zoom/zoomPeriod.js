export default function zoomPeriod(data,time,hours) {
  if( time) {
    let keyOfGivenTime = getIndexOfTime(data,time)
    console.log(keyOfGivenTime)
    let numberOfTimestamps = hours * 60 / 2
    let newArray = cutArray(data,keyOfGivenTime,numberOfTimestamps)
    console.log(keyOfGivenTime)
    return newArray
  } else {
    console.log("moin")
  }
    return data
}

function getIndexOfTime(data, time) {
  for (let key in data){
    let timestamp = data[key].timestamp
    let date = new Date(timestamp *1000)
    const hour = date.getHours()
    if (hour == time) {
      return key
    }
  }
}

function cutArray(data,from,to) {
  let cutOfLimit = parseInt(from) + parseInt(to)
  if (cutOfLimit > data.length) {
      console.log(from,to)
      console.log("jojo")
      cutOfLimit = data.length
  }
  let newArray = []
  for (var i = from; i < cutOfLimit ; i++) {
    newArray.push(data[i])
  }

  return newArray
}
