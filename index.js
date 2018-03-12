// Code your solution in this file!
function logDriverNames(names) {
  for(el in names) {
    console.log(names[el].name)
  }
}

function logDriversByHometown(names, town) {
  for(el in names) {
    if(names[el].hometown == town) { console.log(names[el].name) }
  }
}

function driversByRevenue(arr) {
  let newArr = [...arr]
  return newArr.sort(function (a, b) {
    return a.revenue > b.revenue
  })
}

function driversByName(arr) {
  let newArr = [...arr]
  return newArr.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(arr) {
  return arr.reduce((a, c) => { return { revenue : a.revenue + c.revenue } }).revenue
}

function averageRevenue(arr) {
  return arr.reduce((a, c) => { return { revenue : a.revenue + c.revenue } }).revenue / arr.length
}
