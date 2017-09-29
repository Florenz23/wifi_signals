export default function zoomPeriod(data,time,display_timestamps) {
  console.log(time)
  if( time || time == 0) {
    let keyOfGivenTime = getIndexOfTime(data,time)
    console.log(keyOfGivenTime)
    let numberOfTimestamps = display_timestamps
    let newArray = cutArray(data,keyOfGivenTime,numberOfTimestamps)
    return newArray
  } else {
    console.log("moin")
  }
    return data
}

function getIndexOfTime(data, time) {
  if (!time){
    console.log("moin")
    return 0
  }
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
      cutOfLimit = data.length
  }
  let newArray = []
  for (var i = from; i < cutOfLimit ; i++) {
    newArray.push(data[i])
  }

  return newArray
}
