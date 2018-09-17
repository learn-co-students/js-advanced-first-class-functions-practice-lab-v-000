// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(element) {
    console.log(element.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
}

function driversByRevenue(drivers) {
  let sortedDrivers = drivers.slice().sort(function(driverOne, driverTwo) {
    if (driverOne.revenue < driverTwo.revenue) {
      return -1;
    } else if (driverOne.revenue == driverTwo.revenue) {
      return 0;
    } else {
      return 1;
    }
  });

  return sortedDrivers;
}

function driversByName(drivers) {
  let sortedDrivers = drivers.slice().sort(function(driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name, "en", {
      sensitivity: "base"
    });
  });

  return sortedDrivers;
}

function totalRevenue(drivers) {
  let revenueSum = drivers.reduce(function(accumulator, currentvalue) {
    return accumulator + currentvalue.revenue;
  }, 0);

  return revenueSum;
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
