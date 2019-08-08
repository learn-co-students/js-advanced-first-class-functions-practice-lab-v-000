// Code your solution in this file!

const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

// logs the name of each driver
function logDriverNames(driversArr) {
  drivers.forEach(function(el) {
    console.log(el.name);
  });
}

// logs the name of each driver whose hometown matches the passed-in argument
function logDriversByHometown(driversArr) {
    drivers.forEach(function(el) {
      if (el.hometown === 'Pittsburgh') {
        console.log(el.name);
      }
    });
  }

// uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)
function driversByRevenue(driversArr) {
    return driversNewArr = driversArr.slice().sort(function (a, b) {
      return a.revenue - b.revenue;
    });
}
// uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z)
function driversByName(driversArr) {
  return driversNewArr = driversArr.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

// uses the reduce() method to sum the revenue of every driver and return the total
function totalRevenue(driversArr) {
  return sum = driversArr.reduce(function (a, b) {
    return a + b.revenue;
  }, 0);
}

// calculates the average revenue across all drivers
function averageRevenue(driversArr) {
  let sum = driversArr.reduce(function (a, b) {
    return a + b.revenue;
  }, 0);
  return sum / driversArr.length;
}
