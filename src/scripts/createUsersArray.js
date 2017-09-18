export default function createUsersArray(data) {

  let userEntryArray = createUserEntryArray(data)
  return userEntryArray

}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function createUserEntryArray(data) {

  console.log(data)
  let userEntryArray = []
  let mac_ids = getAllMacIds(data)
  var unique_macs = mac_ids.filter( onlyUnique ); // returns ['a', 1, 2, '1']
  let userEntries = []
  console.log(unique_macs)
  let obj = {}
  for (let key1 in unique_macs) {
    for (let key in data) {
      let search = data[key].cellphones.filter(function (cell) { return cell.mac == unique_macs[key1] });
      // let search = data[key].cellphones.filter(function (cell) { return cell.mac == unique_macs[100] });
      if (search.length != 0) {
      obj = {"timestamp":data[key].timestamp, "cellphone" : search}
        userEntries.push(obj)
      } else {
        let empty_one = [{
          "rssi" : -100,
          "mac" : unique_macs[key1]
        }]
        obj = {"timestamp":data[key].timestamp, "cellphone" : empty_one}
        userEntries.push(obj)
      }
    }
    userEntryArray.push(userEntries)
    userEntries = []
  }
  console.log(userEntries)
  console.log(userEntryArray)
  return userEntryArray

}

function getUserEntries(data,macId) {

  let userEntries = []
  for (let key in data) {
    let search = data[key].cellphones.filter(function (cell) { return cell.mac == macId });
    userEntries.push(search)
  }
  return userEntries

}

function getAllMacIds(data) {

  let newArray = []
  let obj = {}
  console.log(data)
  for (let key in data) {
    for (let key1 in data[key].cellphones)
          newArray.push(data[key].cellphones[key1].mac)
  }
  return newArray
}
