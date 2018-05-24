// Code your solution in this file!
function logDriverNames (drivers){
  drivers.forEach(function (driver){
    console.log(driver.name)
  })
}

function logDriversByHometown (drivers, place) {
  drivers.forEach(function (driver){
    if (driver.hometown === place) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue (drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName (drivers) {
  return drivers.slice().sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

function totalRevenue (drivers) {
  var initialValue = 0;
  return drivers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.revenue;
  },initialValue)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
