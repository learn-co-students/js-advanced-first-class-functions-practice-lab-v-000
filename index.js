// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(drive) {
    console.log(drive.name)
  })
}

function logDriversByHometown(drivers, matcher) {
  drivers.forEach(function(drive) {
    if (drive.hometown === matcher) {
      console.log(drive.name)
    }
  })
}

function driversByRevenue(drivers) {
  let newDrivers = Object.assign([], drivers)
  let compare = makeCompare('revenue')
  return newDrivers.sort(compare)
}

function driversByName(drivers) {
  let compare = makeCompare('name')
  let newDrivers = Object.assign([], drivers)
  return newDrivers.sort(compare)
}

function makeCompare(key) {
  return function compare(a, b) {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
}

function totalRevenue(drivers) {
  return drivers.reduce(
    (accumulator, currentValue, currentIndex, array) => {
      return accumulator + currentValue.revenue;
    }, 0
  );
}


function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
