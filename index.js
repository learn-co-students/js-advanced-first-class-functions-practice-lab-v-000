// Code your solution in this file!
const first = function (el, i, arr) {
  console.log(el.name)
}


function logDriverNames(array) {
  array.forEach(first)
}


function logDriversByHometown(array, location) {
  array.forEach(function (el, i, arr) {
    if (location === el.hometown) {
      console.log(el.name)
    }
  })
}

function driversByRevenue(array) {
  array.sort(function (a, b) {
  return a.revenue - b.revenue 
  })
}

function driversByName(array) {
  array.sort(function (a, b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(array) {
  
}