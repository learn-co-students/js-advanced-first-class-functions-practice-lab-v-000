function logDriverNames(drivers) {
  drivers.forEach(function (person) {
    console.log(person.name);
  }) ;
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (person) {
    if (person.hometown == location) {
      console.log(person.name);
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue-b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  var initialValue = 0;
  return drivers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.revenue;
  }, initialValue)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
