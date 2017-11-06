function logDriverNames(drivers) {
  return drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(driver => {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  let compareRevenues = (a, b) => {
    return a.revenue - b.revenue;
  };
  let driversCopy = drivers.slice();
  return driversCopy.sort(compareRevenues);
}

function driversByName(drivers) {
  let driversCopy = drivers.slice();
  return driversCopy.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  let revAdder = (total, driver) => {
    return total + driver.revenue;
  };
  return drivers.reduce(revAdder, 0);
}

// * `averageRevenue()` — Receives an array of `driver` objects and returns the average revenue earned by each driver.
function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
