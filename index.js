const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

function logDriverNames(array) {
  array.forEach(function(el) {
    console.log(el.name);
  });
};

function logDriversByHometown(array, hometown) {
  matches = array.filter(function(el) {
    return el.hometown === hometown
  })
  matches.forEach(function(el) {
    console.log(el.name)
  })
};

const numberSorter = function (num1, num2) {
  return num1 - num2;
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};


const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  });
};

const totalRevenue = function (drivers) {
  let totalRev = 0;

  drivers.forEach(function (driver) {
    totalRev += driver.revenue;
  });
  return totalRev;
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
