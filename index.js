// Code your solution in this file!
const logDriverNames = function (drivers) { drivers.forEach(function (el, i, ar) {console.log(el.name)})}

const logDriversByHometown = function (drivers, loc) {drivers.forEach(function (el, i, ar){
  if (loc === el.hometown) {
    console.log(el.name)
  }
})}

const driversByRevenue = function (drivers) {
  let a = drivers.slice(0, drivers.length)
  a.sort(function (n1, n2) {return n1.revenue - n2.revenue})
  return a
}

const driversByName = function (drivers) {
  let a = drivers.slice(0, drivers.length)
  a.sort(function(a,b){
    let aName = a.name
    let bName = b.name
    return aName.localeCompare(bName)
  })
  return a
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function(agg, el, i, arr){
    console.log(el.revenue)
    return agg + el.revenue
  },0)
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}

/*
* `averageRevenue()` — Receives an array of `driver` objects and returns the average revenue earned by each driver.
*/
