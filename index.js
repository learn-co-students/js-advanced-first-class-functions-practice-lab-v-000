// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(
    function(driver) {
      console.log(driver.name)})
}

function logDriversByHometown(drivers, value) {
  drivers.forEach( function(driver) { if (driver.hometown == value){
      console.log(driver.name)
  } })
}

function driversByRevenue(drivers){
  const newArr = drivers.slice().sort( function (a,b) {
    return a.revenue - b.revenue;
  })
  return newArr
}

function driversByName(drivers) {
  const newArr = drivers.slice().sort( function(a,b) {
    return a.name.localeCompare(b.name)
  }
  )
  return newArr
}

const sumRevenue = function (agg, el, i, arr) {
  return agg + el.revenue
}
function totalRevenue(drivers) {
  const newArr = drivers.slice().reduce( sumRevenue,0)
  return newArr

}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
