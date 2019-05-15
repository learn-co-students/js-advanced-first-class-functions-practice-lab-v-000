// Code your solution in this file!


function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name)}
  })
}

function driversByRevenue(drivers) {
  let newArray = [...drivers]

  newArray.sort(function (a, b){
    return a.revenue - b.revenue;
  })
  return newArray;
}

function driversByName(drivers) {
  let sortedArray = [...drivers]

  sortedArray.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
  return sortedArray;
}

function totalRevenue(drivers) {
  drivers.reduce(function(agg, driver) {
     return agg + driver.revenue;
  }, 0)
}

function averageRevenue() {

}
