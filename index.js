// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(person) {
    console.log(person.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(person) {
    if (person.hometown == location) {
      console.log(person.name);
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(person1, person2) {
    return person1.revenue - person2.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function(person1, person2) {
    return person1.name.localeCompare(person2.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
