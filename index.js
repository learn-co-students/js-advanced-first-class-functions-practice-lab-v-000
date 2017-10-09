const logDriverNames = function (obj){
  for (let el of obj){
    console.log(el.name)
  }
}
 
function logDriversByHometown(obj, hometown){
  let hometownDrivers = [] 
  for (let el of obj){
    if (el.hometown === hometown){
      console.log(el.name)
    }
  }
}
 
const driversByRevenue = function (drivers) {
  let sortedDrivers = []
  sortedDrivers = drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue
  })
  return sortedDrivers
}

const driversByName = function (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function (drivers) {
  let totalRevenue = 0
  drivers.forEach(function (driver){
    totalRevenue += driver.revenue
  })
  return totalRevenue 
}
 
const averageRevenue = function (drivers) {
  let revenueArray = []
  let sum = 0
  let l = drivers.length
  let averageRevenue = 0
  drivers.forEach(function (driver){
    sum += driver.revenue
    averageRevenue = sum/l
  })
  return averageRevenue 
}