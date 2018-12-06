// Code your solution in this file!
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, town) {
  driversArr = drivers.filter(driver => driver.hometown === town)
  logDriverNames(driversArr);
}

function driversByRevenue(drivers) {
  return drivers.slice(0).sort((a, b) =>  a.revenue - b.revenue)
}

function driversByName(drivers) {
  return [...drivers].sort((a, b) =>  a.name.localeCompare(b.name))
}

function totalRevenue(drivers) {
  return drivers.reduce((acc, driver) => acc + driver.revenue, 0)
}

function averageRevenue(driver) {
  return totalRevenue(drivers)/drivers.length
}
