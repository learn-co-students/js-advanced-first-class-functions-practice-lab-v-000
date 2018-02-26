// Code your solution in this file!

// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//   { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//   { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//   { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//   { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
// ];

const logDriverNames = function(drivers) {
  drivers.forEach (function(driver) {
    console.log(driver.name);
  });
};
// logDriverNames(drivers);
// Bobby
// Sally
// Sammy
// Annette
// Bobby

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach (function(driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    };
  });
};
// logDriversByHometown(drivers, 'Pittsburgh');
// Bobby
// Sammy

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(driver1, driver2) {  //.slice()returns a copy
    return driver1.revenue - driver2.revenue;
  });
};
// driversByRevenue(drivers)
// 0:{name: "Sally", hometown: "New York", revenue: 2000}
// 1:{name: "Sammy", hometown: "Pittsburgh", revenue: 2500}
// 2:{name: "Bobby", hometown: "Pittsburgh", revenue: 3000}
// 3:{name: "Bobby", hometown: "Tampa Bay", revenue: 5000}
// 4:{name: "Annette", hometown: "Los Angeles", revenue: 6000}
// length:5

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
};
// driversByName(drivers)
// 0:{name: "Annette", hometown: "Los Angeles", revenue: 6000}
// 1:{name: "Bobby", hometown: "Pittsburgh", revenue: 3000}
// 2:{name: "Bobby", hometown: "Tampa Bay", revenue: 5000}
// 3:{name: "Sally", hometown: "New York", revenue: 2000}
// 4:{name: "Sammy", hometown: "Pittsburgh", revenue: 2500}
// length:5

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};
// totalRevenue(drivers)
// 18500

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
// averageRevenue(drivers)
// 3700
