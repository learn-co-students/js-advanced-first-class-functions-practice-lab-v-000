// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (element) {
    console.log(element.name);
  });
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, element) {
    return element.revenue + total;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
