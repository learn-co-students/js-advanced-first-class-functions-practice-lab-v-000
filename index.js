// Code your solution in this file!
const print = function (object) {
  return console.log(object.name)
}

function logDriverNames (array) {
  return array.forEach(print)
}


function logDriversByHometown(array, location) {
  const newarray = array.filter(element => element.hometown == location)
  return newarray.forEach(print)
}

function driversByRevenue(array) {
  const newarray = array.slice().sort(function (a, b) {
  return a.revenue - b.revenue;
  })
  return newarray
}

function driversByName(array) {
  const newarray = array.slice().sort(function (a, b) {
    if (a.name < b.name)
    return -1;
    if(a.name > b.name)
    return 1;
    return 0;
  })
  return newarray
}

function totalRevenue(array) {
  const newarray = array.map(function (e) { return e.revenue})
  const sum = newarray.reduce(function (a, b) {
  return a + b;
}, 0)
  return sum
}

function averageRevenue(array) {
  const newarray = array.map(function (e) { return e.revenue})
  const average = totalRevenue(array) / newarray.length
  return average
}
