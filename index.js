function logDriverNames(arrayOfDrivers) {
  arrayOfDrivers.forEach(function(el) {
    console.log(el.name);
  });
}

function logDriversByHometown(arrayOfDrivers, location) {
  arrayOfDrivers.forEach(function(el) {
    if (el.hometown === location) {
      console.log(el.name);
    }
  });
}

function driversByRevenue(arrayOfDrivers) {
  const sortedDrivers = [...arrayOfDrivers];
  sortedDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return sortedDrivers;
}

function driversByName(arrayOfDrivers) {
  const sortedDrivers = [...arrayOfDrivers];
  sortedDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return sortedDrivers;
}

function totalRevenue(arrayOfDrivers) {
  const initial = 0;
  return arrayOfDrivers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.revenue;
  }, initial);
}

function averageRevenue(arrayOfDrivers) {
  return totalRevenue(arrayOfDrivers) / arrayOfDrivers.length
}
