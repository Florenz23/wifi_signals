export default function easyGroup(data) {

  let groupedArray = groupArray(data)
  // console.log(groupedArray)
  let simpleArray = makeSimpleArray(groupedArray)
  console.log(simpleArray)
  return simpleArray


}

function makeSimpleArray(data) {

  let newArray = []
  let obj = {}
  for (let key in data) {
      obj = {
        "timestamp" : data[key].timestamp,
        "amount_cellphones" : data[key].cellphones.length
      }
      newArray.push(obj)
  }
  return newArray

}

function makeAverage() {

  let values = [2, 56, 3, 41, 0, 4, 100, 23];
  let sum = values.reduce((previous, current) => current += previous);
  let avg = sum / values.length;
  avg = Math.round(avg)
  console.log(avg)
}


function groupArray(data) {
  const group_number = 10
  let new_array = []
  let object = {
    "cellphones" : [] ,
    "timestamp" : 0
  }
  let counter = 0
  for (var i = 0; i< data.length; i++) {
    for (var ii=0; ii < data[i].cellphones.length; ii++){
      object.cellphones.push(data[i].cellphones[ii])
    }
    object.timestamp = data[i].timestamp
    counter++
    if(counter == group_number){
      new_array.push(object)
      object = {
        "cellphones" : [] ,
        "timestamp" : 0
      }
      counter = 0
    }
  }
  return new_array

}
