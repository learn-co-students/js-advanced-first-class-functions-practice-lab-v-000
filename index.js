// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(element) {
    console.log(element.name);
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(element) {
    if (element.hometown == location) {
      console.log(element.name);
    }
  })
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

function totalRevenue(drivers) {
  let totalRevenue = 0
  drivers.forEach(function(element) {
    totalRevenue += element.revenue;
  });
  return totalRevenue;
}

function averageRevenue(drivers) {
  let totalRevenue = 0;
  let counter = 0;
  drivers.forEach(function(driver) {
    totalRevenue += driver.revenue;
    counter++;
  });
  let averageRevenue = totalRevenue / counter;
  return averageRevenue;
}