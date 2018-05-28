// Code your solution in this file!

function logDriverNames(arr) {
  arr.forEach(function(driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(arr, location) {
  arr.forEach(function(driver) {
    if (driver.hometown === location)
      console.log(driver.name);
  })
}

function driversByRevenue(arr) {
  const newDrivers = arr.slice();
  return newDrivers.sort(function(a,b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(arr) {
  const newDrivers = arr.slice();
  return newDrivers.sort(function(a, b) {
    return (a.name).localeCompare(b.name);
  })
}



function totalRevenue(arr) {
  return arr.reduce(function(total, driver) {
    return driver.revenue + total;
  }, 0); 
};

const averageRevenue = function(arr) {
  return totalRevenue(arr) / arr.length;
}

