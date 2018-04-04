// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const newArray = drivers.slice();
  return newArray.sort(function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(drivers) {
  const newArray = drivers.slice();
  return newArray.sort(function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function(agg, el, i, arr) {
    return agg += parseInt(el.revenue);
  }, 0);
}

function averageRevenue(drivers) {
  return drivers.reduce(function(agg, el, i, arr) {
    return agg += parseInt(el.revenue);
  }, 0) / drivers.length;
}

const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

