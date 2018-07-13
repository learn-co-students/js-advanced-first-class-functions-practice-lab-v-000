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
  drivers.sort( function (driver) {driver.revenue})
}
