// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
 }

const logDriversByHometown = function (drivers, loca) {
  drivers.forEach(function (driver) {
    if (driver.hometown === loca)
      console.log(driver.name)
  })
 }



const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
 })
}

const comparator = function (a, b) {
  return a.localeCompare(b);
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
 })
}

function totalRevenue(drivers) {
  let sum = 0;
  drivers.forEach(function(driver) {
    sum += driver.revenue
  });
  return sum
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
