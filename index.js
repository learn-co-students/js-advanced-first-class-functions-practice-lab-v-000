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
  let revenue = 0;
  arr.forEach(function(driver) {
    revenue += driver.revenue
  })
  return revenue;
}

function averageRevenue(arr) {
  let revenue = 0;  
  arr.forEach(function(driver) {
    revenue += driver.revenue
  })
  return (revenue / arr.length);
}