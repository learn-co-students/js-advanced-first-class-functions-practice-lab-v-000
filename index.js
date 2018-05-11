// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}


function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
    return (a.name).localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  const revenues = [];
  drivers.forEach(function(driver){revenues.push(driver.revenue)})
  return revenues.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  })
}

function averageRevenue(drivers) {
  const revenues = [];
  drivers.forEach(function(driver){revenues.push(driver.revenue)})
  const total = revenues.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  });
  return total/drivers.length;
}
