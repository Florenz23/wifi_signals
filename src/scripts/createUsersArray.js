export default function createUsersArray(data) {

  let userEntryArray = createUserEntryArray(data)
  return userEntryArray

}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function createUserEntryArray(data) {

  let userEntryArray = []
  let mac_ids = getAllMacIds(data)
  var unique_macs = mac_ids.filter( onlyUnique ); // returns ['a', 1, 2, '1']
  let userEntries = []
  let obj = {}
  for (let key1 in unique_macs) {
    for (let key in data) {
      let search = data[key].cellphones.filter(function (cell) { return cell.mac == unique_macs[key1] });
      if (search.length != 0) {
        obj = {"timestamp":data[key].timestamp, "cellphone" : search}
        userEntries.push(obj)
      }
    }
    userEntryArray.push(userEntries)
    userEntries = []
  }
  console.log(userEntries)
  console.log(userEntryArray)
  return userEntries

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
  for (let key in data) {
    for (let key1 in data[key].cellphones)
          newArray.push(data[key].cellphones[key1].mac)
  }
  return newArray
}
