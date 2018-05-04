// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function (driver) {return console.log(driver.name)})
}

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function (driver) {if (driver.hometown === location) {
    console.log(driver.name)
  }})
}

function driversByRevenue(drivers) {
  const newArray = [...drivers]
  return newArray.sort(function(obj1,obj2) {return obj1.revenue - obj2.revenue})

}

function driversByName(drivers) {
  const newArray = [...drivers]
  return newArray.sort(function (obj1, obj2) {return obj1.name.localeCompare(obj2.name)})
}


function totalRevenue(drivers) {
  let sum = 0
  drivers.forEach(function (driver){ sum += driver.revenue})
  return sum
}

function averageRevenue(drivers) {
  let average = 0
  drivers.forEach(function (driver){average += driver.revenue})
  average = average/drivers.length
  return average
}
