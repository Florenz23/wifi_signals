export default function easyGroup(data) {

  let new_array = []
  let object = {
    "cellphones" : [] ,
    "timestamp" : 0
  }
  let counter = 0
  for (var i = 0; i< data.length; i++) {
    console.log(i)
    for (var ii=0; ii < data[i].cellphones.length; ii++){
      object.cellphones.push(data[i].cellphones[ii])
    }
    object.timestamp = data[i].timestamp
    console.log(object)
    counter++
    if(counter == 2){
      new_array.push(object)
      object = {
        "cellphones" : [] ,
        "timestamp" : 0
      }
      counter = 0
    }
  }
  console.log(new_array)
  return data
}
